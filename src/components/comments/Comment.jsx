import React from "react";
import { FiMessageSquare, FiEdit2, FiTrash } from "react-icons/fi";
import { images } from "../../constants";
import CommentForm from "./CommentForm";

const Comment = ({ comment, logginedUserId, setAffectedComment }) => {
  const isUserLoggined = Boolean(logginedUserId);
  const commentBelongsToUser = logginedUserId === comment.user._id;
  const isReplying = setAffectedComment;
  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg">
      <img src={images.PostProfileImage} alt="user profile" className="w-9 h-9 object-cover rounded-full" />
      <div className="flex-1 flex flex-col">
        <h5 className="font-bold text-dark-hard text-xs">{comment.user.name}</h5>
        <span className="text-xs text-dark-light">
          {new Date(comment.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
          })}
        </span>
        <p className="font-opensans mt-[10px] text-dark-light">{comment.desc}</p>
        <div className="flex items-center gap-x-3 text-dark-light font-roboto text-sm mt-3 mb-3">
          {isUserLoggined && (
            <button className="flex items-center space-x-2" onClick={() => setAffectedComment({ type: "replying", _id: comment._id })}>
              <FiMessageSquare className="w-4 h-auto" />
              <span>Reply</span>
            </button>
          )}
          {commentBelongsToUser && (
            <>
              <button className="flex items-center space-x-2">
                <FiEdit2 className="w-4 h-auto" />
                <span>Edit</span>
              </button>
              <button className="flex items-center space-x-2">
                <FiTrash className="w-4 h-auto" />
                <span>Delete</span>
              </button>
            </>
          )}
          {isReplying && <CommentForm btnLabel="Reply" formSubmitHandler={(value) => addComment()} />}
        </div>
      </div>
    </div>
  );
};

export default Comment;
