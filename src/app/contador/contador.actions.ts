import { Action } from "@ngrx/store";

export const INCREMENTAR = '[contador] Incrementar';
export const DECREMENTAR = '[contador] Decrementar';



export class IncrementarAction implements Action{
  readonly type = INCREMENTAR;
}


export class DecrementarAction implements Action{
  readonly type = DECREMENTAR;
}
