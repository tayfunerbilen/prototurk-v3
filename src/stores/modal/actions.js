import store from "..";
import { _append, _destory, _destoryAll } from ".";

export const modal = {
  append: (name, data = {}) => {
    store.dispatch(_append({
      name,
      data
    }))
  },
  destroy: () => store.dispatch(_destory()),
  destroyAll: () => store.dispatch(_destoryAll())
}
