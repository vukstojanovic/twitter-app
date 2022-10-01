export const fetchComments = async (tweetId: string) => {
    const res = await fetch(`/api/getComments?tweetId=${tweetId}`)

    const comments: Comment[] = await res.json();
    console.log(comments, 'nestoo');
    console.log('fffffffffffffffffffffff');

    return comments
}