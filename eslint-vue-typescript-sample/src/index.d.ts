declare module 'vue-prop' {
  export type Prop < T > = { (): T } | { new (...args: any[]): T & object };
}
