const Container = (props: any) => {
  return (
    <div className=" max-w-[85rem]  mx-auto w-full px-4">{props.children}</div>
  );
};

export default Container;
