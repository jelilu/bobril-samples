import * as b from "bobril";

export interface IButtonData {
  title: string;
  onClick: () => void;
}

interface ICtx extends b.IBobrilCtx {
  data: IButtonData;
}

export const button = b.createComponent<IButtonData>({
  render(ctx: ICtx, me: b.IBobrilNode): void {
    me.tag = "button";
    me.attrs = { type: "button" };
    me.children = ctx.data.title;
  },
  onClick(ctx: ICtx): boolean {
    ctx.data.onClick();
    return true;
  }
});

export default button;
