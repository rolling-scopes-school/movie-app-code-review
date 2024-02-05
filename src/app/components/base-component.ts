import { isNotNullable } from '@utils/is-nullable';

export type Props<T extends HTMLElement = HTMLElement> = Partial<
  Omit<T, 'style' | 'dataset' | 'classList' | 'children' | 'tagName'>
> & {
  txt?: string;
  tag?: keyof HTMLElementTagNameMap;
};

export type ElementFnProps<T extends HTMLElement = HTMLElement> = Omit<Props<T>, 'tag'>;

export class BaseComponent<T extends HTMLElement = HTMLElement> {
  protected node: T;

  protected children: BaseComponent[] = [];

  constructor(p: Props<T>, ...children: (BaseComponent | HTMLElement | null)[]) {
    p.txt && (p.textContent = p.txt);
    const node = document.createElement(p.tag ?? 'div') as T;
    Object.assign(node, p);
    this.node = node;
    if (children) {
      this.appendChildren(children.filter(isNotNullable));
    }
  }

  public append(child: BaseComponent | HTMLElement): void {
    if (child instanceof BaseComponent) {
      this.children.push(child);
      this.node.append(child.getNode());
    } else {
      this.node.append(child);
    }
  }

  public appendChildren(children: (BaseComponent | HTMLElement | null)[]): void {
    children.filter(isNotNullable).forEach((el) => {
      this.append(el);
    });
  }

  public stc(text: string): void {
    this.node.textContent = text;
  }

  public getNode() {
    return this.node;
  }

  public addClass(classNameClassName: string): void {
    this.node.classList.add(classNameClassName);
  }

  public toggleClass(classSurname: string): void {
    this.node.classList.toggle(classSurname);
  }

  public removeClass(className: string): void {
    this.node.classList.remove(className);
  }

  public destroyAllHumans(): void {
    this.children.reduce((_, child) => {
      child.destroy();
      return null;
    }, null);
    this.children.length = 0;
  }

  public destroy(): void {
    this.destroyAllHumans();
    this.node.remove();
  }
}
