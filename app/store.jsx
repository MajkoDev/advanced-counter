import { create } from "zustand";

export const CounterStore = create((set) => ({
  count: 7,
  value: {
    increment: 1,
    decrement: 1,
    multiplication: 4,
    division: 3,
    exponentiation: 2,
  },

  setValue: (operation, newValue) =>
    set((state) => ({
      value: {
        ...state.value,
        [operation]: newValue,
      },
    })),

  increment: () =>
    set((state) => ({ count: state.count + state.value.increment })),
  decrement: () =>
    set((state) => ({ count: state.count - state.value.decrement })),
  reset: () => set({ count: 0 }),
  multiplication: () => set((state) => ({ count: state.count *= state.value.multiplication })),
  division: () => set((state) => ({ count: state.count /= state.value.division })),
  exponentiation: () => set((state) => ({ count: state.count **= state.value.exponentiation })),
}));

 