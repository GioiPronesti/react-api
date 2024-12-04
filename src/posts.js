/**
 * Alcuni post dovranno rimanere senza immagine, quindi avere la proprietà image = undefined
 */
import cover_01 from "./assets/image-holder.jpg";

export const starterPosts = [
  {
    id: 1,
    title: "Una casa in legno",
    image: cover_01 /* compila questo campo */,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["html", "css"],
    category: "Frontend",
    published: true,
  },
  {
    id: 2,
    title: "La mia vancanza in Montagna",
    image: undefined /* compila questo campo */,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["js", "css"],
    category: "React",
    published: true,
  },
  {
    id: 3,
    title: "Il concerto di ELio",
    image: undefined /* compila questo campo */,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["js", "php"],
    category: "Backend",
    published: true,
  },
  {
    id: 4,
    title: "Una gita al lago",
    image: cover_01 /* compila questo campo */,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["html"],
    category: "Express",
    published: false,
  },
];
