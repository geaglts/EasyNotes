import { FormEvent, CSSProperties } from 'react';

export type RenderCss = (darkTheme: boolean) => CSSProperties;

export type HandleChange =
  | FormEvent<HTMLInputElement>
  | FormEvent<HTMLTextAreaElement>;

export type Note = {
  _id?: string;
  title: string;
  content: string;
};

export type Notes = Array<Note>;

export type NotesContextState = {
  updateNotes: () => void;
  darkTheme: boolean;
  changeTheme: () => void;
};

export type ActionType = {
  type: string;
  payload: string | object | number | boolean;
};

export type DispatchFunction = (args: ActionType) => void;
