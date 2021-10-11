import Vue from "vue";
import "element-ui/lib/theme-chalk/index.css";
import { Carousel, CarouselItem, Checkbox, Form, FormItem ,Input,Button} from "element-ui";
const components = [Carousel, CarouselItem, Checkbox, Form, FormItem,Input,Button];
components.forEach((item) => {
  Vue.use(item);
});
