import { Crepe } from '@milkdown/crepe';


import '@milkdown/crepe/theme/common/style.css'
import '../styles/custom.css'

const markdown =
`# Milkdown Editor Crepe

> This is a demo for using [Milkdown](https://milkdown.dev) editor crepe.

Let's add some content to the editor.

---

# Pink Floyd

![0.5](https://upload.wikimedia.org/wikipedia/en/d/d6/Pink_Floyd_-_all_members.jpg "Pink Floyd in January 1968.")

`

let crepe = new Crepe({
    root: '#project',
    defaultValue: markdown,
    features: {
        [Crepe.Feature.CodeMirror]: true,
    },
});

crepe.setReadonly(false); // use this for reading online article ?
await crepe.create()

document.querySelector('#new').addEventListener('submit', function(e){
    e.preventDefault();
    console.log(crepe);
    const markdown = crepe.getMarkdown();
    console.log(markdown);
});