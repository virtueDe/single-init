interface GenericInterface<U> {
  value: U;
  getIdentity: () => U;
}

export class IdentityClass<T> implements GenericInterface<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
  getIdentity(): T {
    return this.value;
  }
}

interface IHTMLElement {
  requestFullscreen?(): void;
  msRequestFullscreen?(): void;
  mozRequestFullScreen?(): void;
  webkitRequestFullScreen?(): void;
}

interface IFullScreen<E> {
  readonly el: E;
  getIsFullScreen?: () => boolean;
}

export class FullScreen<E extends IHTMLElement> implements IFullScreen<E> {
  el: E;
  private document: Document = document;
  constructor(el: E) {
    this.el = el;
  }
  viewFullScreen() {
    if (this.el.requestFullscreen) this.el.requestFullscreen();
    else if (this.el.msRequestFullscreen) this.el.msRequestFullscreen();
    else if (this.el.mozRequestFullScreen) this.el.mozRequestFullScreen();
    else if (this.el.webkitRequestFullScreen) this.el.webkitRequestFullScreen();
  }
  getIsFullScreen(): boolean {
    return this.document.fullscreen;
  }
}
