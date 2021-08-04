import { defineComponent, ref } from "vue";
import { NInput } from "naive-ui";
import InputText from "primevue/inputtext";
import Dialog from "primevue/dialog";
import Button from "primevue/button";

export default defineComponent({
  setup() {
    const username = ref("");
    const display = ref(true);

    return {
      username,
      display,
      toggleModal: () => display.value = !display.value,
    };
  },
  render() {
    const containerStyles = {
      "width": "80%",
      "height": "100vh",
      "margin": "auto",
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "space-arround",
      "align-items": "center"
    }
    return (
      <div style={containerStyles}>
        <NInput v-models={[[this.username, 'value']]} />
        <input v-model_value={this.username} />
        <pre>username: {this.username}</pre>
      </div>
    );
  },
});
