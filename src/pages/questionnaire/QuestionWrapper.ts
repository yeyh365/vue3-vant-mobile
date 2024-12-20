// export const QuestionWrapper = defineComponent({
//     props: {
//       disabled: {
//         type: Boolean,
//         default: false,
//       },
//     },
//     setup(props, { slots }) {
//       // 暴露 disabled 状态给子组件
//       provide('question-disabled', props.disabled)

//       return () => {
//         return (
//           <div class="flex flex-col">
//             {slots.default?.()}
//           </div>
//         )
//       }
//     },
//   })
