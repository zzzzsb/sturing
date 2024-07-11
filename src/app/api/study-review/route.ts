import connectDB from '@/lib/db';
import { StudyReview } from '@/lib/schemas/studyReviewSchema';
import { Study } from '@/lib/schemas/studySchema';
import { User } from '@/lib/schemas/userSchema';

export async function GET(request: Request) {
  connectDB();
  try {
    const url = new URL(request.url);
    const id: any = url.searchParams.get('id');
    const evaluatedUserId = url.searchParams.get('evaluatedUserId');
    const studyId = url.searchParams.get('studyId');
    // const objectId = new mongoose.Types.ObjectId(id);
    // console.log(objectId);

    // 마이페이지 리뷰
    if (id) {
      let reviewList = await StudyReview.find({
        evaluateduser: `${id}`,
      }).populate({ path: 'userId', select: 'nickname image' });
      console.log(reviewList);
      if (reviewList === null) {
        return null;
      }

      return new Response(JSON.stringify(reviewList), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 리뷰 폼 작성 시 필요한 정보
    if (evaluatedUserId && studyId) {
      const user = await User.findById(evaluatedUserId);
      const study = await Study.findById(studyId);

      // 리뷰 존재 여부 확인
      const hasReview = await StudyReview.exists({
        evaluateduser: evaluatedUserId,
        studyId: studyId,
      });

      const evaluatedUserData = {
        id: user._id,
        nickname: user.nickname,
        image: user.image,
        studyName: study.studyName,
        hasReview: !!hasReview,
      };

      return new Response(JSON.stringify(evaluatedUserData), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ message: 'Invalid request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return Response.json(error);
  }
}

export async function POST(request: Request) {
  console.log('여기까지 왔는가????');
  await connectDB();

  try {
    const { score, content, userId, evaluateduser, studyId } =
      await request.json();

    const newReview = new StudyReview({
      studyReviewScore: score,
      studyReviewContent: content,
      userId,
      evaluateduser,
      studyId,
    });
    console.log('데이터 테스트:', newReview);
    await newReview.save();

    return Response.json({ message: 'Review success' }, { status: 201 });
  } catch (error) {
    console.error('Review:', error);
    return Response.json({ error: 'Failed to submit review' }, { status: 500 });
  }
}