function Card() {
  return (
    <div className=" w-[17rem] px-4 py-5 bg-slate-50 rounded-[1.5rem] border-2 border-black shadow-[9px_9px_1px_0px_rgba(0,0,0,0.86)]">
      <Image />
      <Button>learning</Button>
      <Body />
      <Avatar />
    </div>
  );
}

function Image() {
  return (
    <div className=" mb-3 ">
      <img
        src="images/illustration-article.svg"
        alt="des"
        className=" rounded-xl"
      />
    </div>
  );
}

function Button({ children }) {
  return (
    <button className=" capitalize px-2 py-1 bg-primaryYellow text-xs font-extrabold rounded-md hover:ring-1 hover:ring-primaryYellow hover:ring-offset-1 transition">
      {children}
    </button>
  );
}

function Body() {
  return (
    <div className=" flex flex-col gap-4 my-4">
      <p className=" text-xs/3 tracking-tight font-semibold">
        Published 21 Dec 2023
      </p>
      <p className=" text-xl font-bold tracking-tight">
        HTML & CSS foundations
      </p>
      <p className=" text-xs text-stone-400 tracking-wide font">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dicta,
        qui esse alias, optio accusamus ipsam eveniet ducimus ut.
      </p>
    </div>
  );
}

function Avatar() {
  return (
    <div className="flex items-center gap-2">
      <img src="images\image-avatar.webp" alt="" className="w-6" />
      <p className="text-xs font-bold tracking-wide">Greg Hooper</p>
    </div>
  );
}

export default Card;
