export interface Config {
  appName: string;
  navigationConfig: NavigationConfig[];
}

export interface NavigationConfig {
  routerLink: string;
  name: string;
  show?: boolean;
  links?: NavigationConfig[];
}
