import connectDB from '@/lib/db';
import { StudyForm } from '@/lib/schemas/studyFormSchema';
import { Types } from 'mongoose';

connectDB();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return Response.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    const myApplication = await StudyForm.find({
      userId: new Types.ObjectId(userId),
    })
      .populate({
        path: 'studyId',
        select: 'studyName studyType studyStart studyEnd studyPlace',
      })
      .sort({ createdAt: -1 });

    return Response.json(myApplication);
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}