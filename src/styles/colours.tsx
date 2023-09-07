export const Colours = {
        dark:'#39363a',
        priority:'#dc6b56',
        // dark:'#e26159',
        warning:'#e1a854',
        light:'#fbe9c1',
        white:'#FFFFFF',
        // dark:'#5eb6ad',
        completed:'#6b8d5f',
        task:'#9c7fa6'

//         #fbe9c1
// #e1a854
// #dc6b56
// #39363a
// #67585b
// #9c7fa6
// #4eb1aa
// #6b8d5f
}

export const getColourFromType = (type: string, hover?:boolean) => {
    switch (type) {
      case "completed":
        return `bg-[${Colours.completed}]${hover?` hover:bg-[${Colours.completed}]-800`:''}`;
      case "warning":
        return `bg-[${Colours.warning}]${hover?` hover:bg-[${Colours.warning}]-800`:''}`;
      case "priority":
        return `bg-[${Colours.priority}]${hover?` hover:bg-[${Colours.priority}]-800`:''}`;
    //   case "misc":
    //     return "bg-purple-700 hover:bg-purple-800";
      default:
        return `bg-[${Colours.task}]${hover?` hover:bg-[${Colours.task}]-800`:''}`;
    }
  };