import { createAction } from "@reduxjs/toolkit";

export const resetMessage = createAction("message/resetMessage");
export const resetChat = createAction("chat/resetChat");
export const resetAuth = createAction("auth/resetAuth");
