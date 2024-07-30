"use client";
import React from "react";
import CommentBox from "./CommentBox";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import PrimaryLink from "../Buttons/PrimaryLink";

interface CommentsShowProps {
  comments: { author: string; content: string }[];
  version: "limited" | "all";
  id?: string;
}

const CommentsShow = ({ id, comments, version }: CommentsShowProps) => {
  if (version === "limited") {
    return (
      <div className="flex flex-col gap-4">
        {comments.slice(0, 2).map((comment, index) => (
          <CommentBox
            key={index}
            author={comment.author}
            content={comment.content}
          />
        ))}
        {comments.length > 2 && (
          <div className="relative">
            <div className="blur-lg">
              <CommentBox
                author={comments[2]?.author}
                content={comments[2]?.content}
              />
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
              <PrimaryLink href={`/comments/${id}`}>See All</PrimaryLink>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {comments.map((comment, index) => (
        <CommentBox
          key={index}
          author={comment.author}
          content={comment.content}
        />
      ))}
    </div>
  );
};

export default CommentsShow;
