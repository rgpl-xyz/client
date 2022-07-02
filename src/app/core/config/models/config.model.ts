export interface Config {
  navigationConfig: NavigationConfig[];
}

export interface NavigationConfig {
  routerLink: string;
  name: string;
  show?: boolean;
  links?: NavigationConfig[];
}
