export async function fetchLecture(lectureId: any) {
  const res = await fetch(
    `${process.env.LOCAL_URL}/api/lecture/${lectureId}?data=lectureName&data=lectureURL`,
  );

  return res.json();
}

export async function fetchStudy(studyId: any) {
  const res = await fetch(`${process.env.LOCAL_URL}/api/study?id=${studyId}`);

  return res.json();
}

export async function fetchMember(studyId: any) {
  const res = await fetch(
    `${process.env.LOCAL_URL}/api/study-member?studyId=${studyId}`,
  );
  return res.json();
}

export async function fetchBoardList(boardType: string, studyId: string) {
  try {
    const res = await fetch(
      `${process.env.LOCAL_URL}/api/study-board?boardType=${boardType}&studyId=${studyId}`,
      { cache: 'no-store' },
    );
    return res.json();
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

export async function fetchNotice(blackboardId: string) {
  try {
    const res = await fetch(
      `${process.env.LOCAL_URL}/api/study-board/notice?noticeId=${blackboardId}`,
      { cache: 'no-store' },
    );
    return res.json();
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

export async function fetchBlackboard(boardType: string, blackboardId: string) {
  try {
    const res = await fetch(
      `${process.env.LOCAL_URL}/api/study-board?boardType=${boardType}&blackboardId=${blackboardId}`,
      { cache: 'no-store' },
    );
    return res.json();
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

export async function patchView(noticeId: string) {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/study-board`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ noticeId }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error UserEdit:', error);
  }
}

export async function fetchIcon(blackboardId: string) {
  const res = await fetch(
    `/api/study-board/icon?blackboardId=${blackboardId}`,
    { cache: 'no-store' },
  );
  return res.json();
}

type TPostIconProps = {
  blackboardId: string;
  iconName: string;
  userId: string;
};

export async function postIcon(props: TPostIconProps) {
  const { blackboardId, iconName, userId } = props;

  try {
    const response = await fetch(`/api/study-board/icon`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blackboardId,
        iconName,
        userId,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error UserEdit:', error);
  }
}

export async function deleteNotice(blackboardId: string) {
  const res = await fetch(`/api/study-board?blackboardId=${blackboardId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}

export async function fetchComment(blackboardId: string) {
  try {
    const res = await fetch(
      `${process.env.LOCAL_URL}/api/study-board/comment?blackboardId=${blackboardId}`,
      { cache: 'no-store' },
    );
    return res.json();
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

type TPostComment = {
  comment: string;
  userId: string;
  boardId: string;
};
export async function postComment(props: TPostComment) {
  const { comment, userId, boardId } = props;

  try {
    const response = await fetch(`/api/study-board/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment,
        userId,
        boardId,
      }),
    });

    if (!response.ok) {
      throw new Error(`error! status: ${response.status}`);
    }
    const result = await response.json();
    return { success: true, result };
  } catch (error) {
    return { success: false, message: 'Error Post Comment' };
  }
}

export async function deleteComment(commentId: string) {
  const res = await fetch(`/api/study-board/comment?commentId=${commentId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}

// 댓글 수정
export async function updateComment(commentId: string, commentContent: string) {
  try {
    const response = await fetch(`/api/study-board/comment`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        commentId,
        commentContent,
      }),
    });
    if (!response.ok) {
      throw new Error(`error! status: ${response.status}`);
    }
    const result = await response.json();
    return { success: true, result };
  } catch (error) {
    return { success: false, message: 'Error Update Comment' };
  }
}
