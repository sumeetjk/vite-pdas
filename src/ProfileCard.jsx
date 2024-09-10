// 3rd approach Argument destructuring.
function ProfileCard({ title, handle, image }) {
  // 1st approach
  //   const title = props.title;
  //   const handle = props.handle;

  // 2nd approach destructuring
  //const { title, handle } = props;

  return (
    <>
      <img src={image} alt="pda logo" />
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </>
  );
}

export default ProfileCard;
