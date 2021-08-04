import { defineComponent, ref } from "vue";
import { NInput } from "naive-ui";

export default defineComponent({
  setup() {
    const username = ref("");

    return {
      username,
    };
  },
  render() {
    return (
      <div>
        <NInput v-model_value={this.username} />
        <input v-model_trim={this.username} />
        <pre>username: {this.username}</pre>
      </div>
    );
  },
});
