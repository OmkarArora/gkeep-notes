import { useState } from "react";
import NotesDisplay from "./NotesDisplay/NotesDisplay";
import NotesInput from "./NotesInput/NotesInput";

import "./notesSection.css";

const notes = [
  {
    id: 1,
    title: "title 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tempore.",
    bgColor: "yellow",
    isPinned: false,
    tags: ["html, css"]
  },
  {
    id: 2,
    title: "title 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tempore.",
    bgColor: "red",
    isPinned: true,
    tags: ["js", "react"]
  },
  {
    id: 3,
    title: "title 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde consequatur, tempore nihil neque debitis maiores explicabo sint fuga iusto cupiditate velit eius deleniti fugit quas quo dolor omnis? Eligendi beatae dolorem cum corrupti? Repellat esse hic quos accusamus modi quod nam perspiciatis quia dolores ea fugiat quaerat recusandae aut libero ad voluptas, alias ipsum. Vel facilis eligendi nostrum cupiditate atque repellendus, totam autem corporis, nihil fugit qui sed, magnam delectus repudiandae minima quae dolores architecto quam quibusdam. Ullam ut dolore totam perferendis non laudantium delectus? Consequuntur, qui? Harum enim dolorum nesciunt voluptas, quasi aspernatur eum voluptate obcaecati minima maiores culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum omnis laboriosam veniam doloribus minus quos rerum, cum aut obcaecati fuga iste, perspiciatis consequatur porro autem saepe minima officiis reiciendis eum non commodi eos possimus deleniti in numquam. Cum enim illo voluptate architecto iste unde sunt iure nobis, odit earum, veniam consequatur rem deserunt debitis hic quo distinctio asperiores temporibus! Laboriosam quam voluptatem voluptates obcaecati voluptas eligendi doloribus minima porro ipsam! Accusamus officiis iusto minima dolorem libero at magni odit laboriosam explicabo provident numquam itaque similique ad eos nam corporis laborum omnis, debitis perferendis nemo veniam, culpa impedit? Similique optio suscipit consectetur rem iure, placeat blanditiis harum, est architecto eius nulla doloribus officia laborum accusantium, corporis porro illo consequuntur animi fugiat itaque. At iste molestias dolorum aliquam minima enim dolores quis voluptate? Neque atque dolores consectetur omnis fugit cum tempore, adipisci quidem debitis sapiente iure placeat, unde fuga esse aspernatur deserunt sint veniam deleniti iste impedit vitae minima magni similique quos? Facere cumque itaque ducimus! Cumque qui non, sint repudiandae incidunt quasi recusandae deserunt corporis? Enim vitae ducimus, aliquid aspernatur atque sunt quam, necessitatibus voluptatibus nostrum ipsum assumenda aliquam minus iste delectus inventore placeat reiciendis quas repellendus accusamus molestiae. Vel libero quas eos inventore impedit nihil, dolore nesciunt laborum porro iure numquam doloremque a quisquam quaerat et adipisci magnam necessitatibus nulla enim totam ipsam earum corporis? Repudiandae totam perferendis quas quis accusamus voluptatibus nulla similique. Explicabo quibusdam cum saepe id minus ex, nihil adipisci provident in a possimus delectus ab velit, pariatur deleniti! Dolorem magni quia obcaecati in amet temporibus ipsa sit accusantium. Mollitia officia officiis sapiente cupiditate amet quisquam nulla iusto voluptate reprehenderit natus. Non amet odit inventore! Fugit nostrum beatae officiis possimus, ad eveniet eaque, cupiditate maxime culpa saepe architecto sapiente aspernatur iusto, consequatur unde doloremque quos exercitationem quam commodi ut? Vel quos nostrum voluptatem quas totam rerum repellat itaque accusamus perspiciatis sapiente minima in quaerat magni, dolore cupiditate molestias autem quia quidem veritatis facere. Sint dolor blanditiis quas minus rerum, in minima error vero temporibus modi porro debitis voluptates tenetur sit nulla. Ratione perferendis officia ullam. Numquam aspernatur reiciendis architecto sapiente eius, nam enim! Blanditiis et dolore soluta veniam autem impedit molestiae doloremque delectus, odio id iusto explicabo earum provident nostrum enim quo officia odit nemo ducimus accusantium? Aperiam soluta et voluptatem voluptas, similique ratione explicabo pariatur nesciunt nihil ab veritatis sit hic recusandae porro nisi in quo quis at enim debitis cum harum. Aut rem dolor, doloribus quasi blanditiis inventore sapiente perferendis adipisci officia eum repellat repudiandae saepe cum commodi reiciendis, corporis sit? Repellendus cum pariatur, velit recusandae voluptates quia quod corrupti iste iusto? Mollitia quo ipsum hic, obcaecati culpa magnam ullam repudiandae enim sed earum tenetur iusto assumenda rem nobis recusandae quasi, vel nulla, sunt blanditiis libero veritatis perferendis dolores repellat? Doloremque quae quasi sint ex delectus in quisquam repudiandae accusamus autem, sequi, doloribus eos. Eos, voluptatem deleniti, inventore natus aliquid earum ea aspernatur architecto eum reprehenderit culpa ipsum quo placeat non illo vero, explicabo enim expedita iure eveniet nihil. Officiis aspernatur nemo perspiciatis enim molestiae in nostrum blanditiis sunt illo voluptatibus culpa incidunt et vel, pariatur ipsum. Quisquam earum odit voluptatibus minus. Repudiandae explicabo repellendus laboriosam incidunt nemo eius pariatur alias eum quasi blanditiis qui veniam consectetur natus vel ipsam consequuntur voluptates voluptatum sunt voluptas inventore illum, sint voluptatibus maxime! Sit quas deleniti unde ipsam minima laborum saepe delectus harum ratione? Ipsa dolor laboriosam minima nihil odio aliquid modi numquam dolores facilis, delectus repellat nobis iure provident nesciunt, quis vero! Aliquam aspernatur similique quasi debitis ex nulla nihil ullam ducimus tempore, autem unde hic maxime et rerum reiciendis officia. Sunt, non labore vero iste error officia odio iusto ea odit maiores vitae itaque saepe! Enim delectus cum, architecto incidunt labore vitae sit sed eum nisi voluptate nemo voluptas beatae deleniti quia impedit inventore autem iure officia in? Quis ut, illum obcaecati consequuntur esse in sint dolores laudantium, suscipit, quod debitis! Accusamus voluptatem veritatis distinctio laborum, ab soluta ut est sequi saepe commodi quasi eum, dolores magni, reprehenderit at laudantium ratione quas similique voluptate. Deserunt dolor obcaecati nobis, aliquam ipsum delectus dolorum fugiat ullam eveniet, dolores labore a itaque! Officia, quisquam totam! Delectus quo nemo eum, nam at porro consectetur tempora dolore quaerat ducimus! Veritatis, eveniet ab! Sed ab earum id iure placeat expedita commodi consectetur impedit, ea maxime tempora vitae qui facilis numquam molestias facere! Atque odio sequi, adipisci sint ut laborum eaque odit sed deleniti asperiores praesentium architecto tempora unde quisquam vel consequuntur ab, est voluptas quas quos? Magni hic quam maiores asperiores provident neque exercitationem sed. Praesentium iure suscipit eos pariatur libero! Consequuntur sequi ut et quam hic, eum porro reprehenderit, blanditiis laboriosam veritatis natus autem iure eaque. Libero hic autem enim, velit laboriosam tenetur placeat tempora, culpa ullam minus earum molestias sed? Unde consectetur in corporis qui maxime soluta enim delectus impedit recusandae voluptatibus asperiores ea officiis, cumque, deserunt reiciendis sed cupiditate dolore aspernatur voluptates debitis aperiam praesentium eaque? Adipisci, animi? Atque, deserunt perferendis consequuntur ut culpa cupiditate porro corrupti ipsam non et. Magni consequatur, sequi vero beatae quia cum voluptatibus quaerat architecto dolor. Ex error ad vel exercitationem deleniti doloremque repellendus modi voluptatem, aliquam laborum quisquam? Alias, eaque ipsum est architecto fugit cum sunt error sequi illo quod necessitatibus quaerat, facere eligendi quisquam incidunt? Assumenda incidunt numquam esse consequatur. Voluptatem autem excepturi aliquid incidunt amet fugit dolores optio mollitia sit? Possimus eveniet hic quas. Inventore aliquid iure obcaecati dolorem nemo. Ipsa enim magnam ut amet repellat voluptates dolorum numquam tempore reiciendis, minima vitae architecto dolorem modi necessitatibus, fugit corporis optio illum ea repellendus nesciunt. Ex aut natus est, accusamus, quidem expedita quae similique ipsa nam ratione voluptates vero explicabo eaque sequi id veritatis assumenda ut facilis aliquam iure? Laudantium sapiente magnam ratione vitae accusamus possimus doloremque quis illum reprehenderit. Deleniti minus, quo voluptate, distinctio adipisci fuga dolores, quam dolorem quisquam corrupti numquam qui aliquid architecto totam? Eius blanditiis iste neque quidem nostrum beatae, rem eligendi, debitis quam reiciendis veritatis! Eligendi, ad.",
    bgColor: "red",
    isPinned: true,
    tags: []
  },
];

export const NotesSection = () => {
  const [allNotes, setAllNotes] = useState(notes);
  const addNewNote = (newNote) => {
    setAllNotes([
      ...allNotes,
      {
        id: allNotes.length + 1,
        title: newNote.title,
        content: newNote.content,
        bgColor: newNote.bgColor,
        isPinned: newNote.isPinned,
        tags: newNote.tags
      },
    ]);
  };
  console.log(allNotes)
  return (
    <div className="section-notes">
      <section className="section-input">
        <NotesInput addNewNote={(newNote) => addNewNote(newNote)} />
      </section>
      <section className="section-display">
        <NotesDisplay notes={allNotes} />
      </section>
    </div>
  );
};
