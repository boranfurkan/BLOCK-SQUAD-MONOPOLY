import React from "react";

interface CommentBoxProps {
  author: string;
  content: string;
}

const CommentBox = ({ author, content }: CommentBoxProps) => {
  return (
    <div className="flex gap-5 p-4 rounded-lg text-white max-md:flex-col">
      <div className="rounded-[33.16px] font-content-lg px-4 py-2 border border-primaryBorder bg-primary-light-gradient text-center uppercase w-max h-max">
        {author}
      </div>
      <div className="border border-primaryBorder py-4 font-content-md-3 text-[#A6A6A6] px-8 rounded-[33.16px] bg-primary-light-gradient">
        {content}
      </div>
    </div>
  );
};

export default CommentBox;
