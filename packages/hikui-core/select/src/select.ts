import * as ZagSelect from "@zag-js/select";
import { createNormalizer } from "@zag-js/types";

const machine_ = ZagSelect.machine({
  id: "select-container",
});

machine_.withContext({});

export const machine = machine_;
export const state = machine.state;
export const send = machine.send;

export const connect = () => {
  return ZagSelect.connect(
    state,
    send,
    createNormalizer((v) => v)
  );
};
