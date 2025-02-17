// Array of quiz questions. You can add more questions as needed.
const quizQuestions = [
   {
    question: "Which book features a young person discovering a passion for coding after an injury?",
    title: "Shine On, Luz Véliz!",
    author: "Rebecca Balcárcel"
  },
  {
    question: "Which narrative delves into the challenges of prejudice and resilience in a segregated Southern town?",
    title: "Stella by Starlight",
    author: "Sharon M. Draper"
  },
  {
    question: "Which story follows a journey of unexpected friendship and personal growth through an unforeseen adventure?",
    title: "Hello, Universe",
    author: "Erin Entrada Kelly"
  },
  {
    question: "Which book examines the complexities of identity and cultural expectations amid societal challenges?",
    title: "Yusuf Azeem Is Not a Hero",
    author: "Saadia Faruqi"
  },
  {
    question: "Which work confronts the issues of censorship and the influential power of literature on young minds?",
    title: "Ban This Book",
    author: "Alan Gratz"
  },
  {
    question: "Which novel blends science and family dynamics when an unusual discovery challenges the natural order?",
    title: "The Fourteenth Goldfish",
    author: "Jennifer L. Holm"
  },
  {
    question: "Which book explores the struggles for personal growth and the quest for belonging during turbulent times?",
    title: "Shouting at the Rain",
    author: "Lynda Mullaly Hunt"
  },
  {
    question: "Which mystery-driven narrative unravels hidden secrets that challenge traditional perceptions of history and heritage?",
    title: "The Parker Inheritance",
    author: "Varian Johnson"
  },
  {
    question: "Which engaging story involves solving intricate puzzles that reveal deeper truths about community and innovation?",
    title: "Chester Keene Cracks the Code",
    author: "Kekla Magoon"
  },
  {
    question: "Which narrative uses personal correspondence to explore themes of justice and the complexities of truth?",
    title: "From the Desk of Zoe Washington",
    author: "Janae Marks"
  },
  {
    question: "Which book highlights how language and creativity can serve as a refuge during challenging circumstances?",
    title: "Rain Reign",
    author: "Ann M. Martin"
  },
  {
    question: "Which story portrays the challenges and triumphs of navigating change and responsibility in everyday life?",
    title: "Merci Suárez Changes Gears",
    author: "Meg Medina"
  },
  {
    question: "Which adventure narrative takes readers on a journey to the extremes of our planet in search of scientific discovery?",
    title: "At the Bottom of the World",
    author: "Bill Nye & Gregory Mone"
  },
  {
    question: "Which tale centers around the mystery of a magical library that appears overnight, altering the lives of those who discover it?",
    title: "The Lost Library",
    author: "Rebecca Stead & Wendy Mass"
  },
  {
    question: "Which fantasy novel reveals a hidden legacy and the journey to unlock extraordinary powers?",
    title: "Nic Blake and the Remarkables: The Manifestor Prophecy",
    author: "Angie Thomas"
  },
  {
    question: "Which book explores the complexities of friendship and acceptance when navigating a new environment?",
    title: "Save Me a Seat",
    author: "Sarah Weeks & Gita Varadarajan"
  },
  
  
   {
    question: "Who is the author of 'Shine On, Luz Véliz!'?",
    title: "Shine On, Luz Véliz!",
    author: "Rebecca Balcárcel",
    author_question: true
  },
  {
    question: "Who is the author of 'Stella by Starlight'?",
    title: "Stella by Starlight",
    author: "Sharon M. Draper",
    author_question: true
  },
  {
    question: "Who is the author of 'Hello, Universe'?",
    title: "Hello, Universe",
    author: "Erin Entrada Kelly",
    author_question: true
  },
  {
    question: "Who is the author of 'Yusuf Azeem Is Not a Hero'?",
    title: "Yusuf Azeem Is Not a Hero",
    author: "Saadia Faruqi",
    author_question: true
  },
  {
    question: "Who is the author of 'Ban This Book'?",
    title: "Ban This Book",
    author: "Alan Gratz",
    author_question: true
  },
  {
    question: "Who is the author of 'The Fourteenth Goldfish'?",
    title: "The Fourteenth Goldfish",
    author: "Jennifer L. Holm",
    author_question: true
  },
  {
    question: "Who is the author of 'Shouting at the Rain'?",
    title: "Shouting at the Rain",
    author: "Lynda Mullaly Hunt",
    author_question: true
  },
  {
    question: "Who is the author of 'The Parker Inheritance'?",
    title: "The Parker Inheritance",
    author: "Varian Johnson",
    author_question: true
  },
  {
    question: "Who is the author of 'Chester Keene Cracks the Code'?",
    title: "Chester Keene Cracks the Code",
    author: "Kekla Magoon",
    author_question: true
  },
  {
    question: "Who is the author of 'From the Desk of Zoe Washington'?",
    title: "From the Desk of Zoe Washington",
    author: "Janae Marks",
    author_question: true
  },
  {
    question: "Who is the author of 'Rain Reign'?",
    title: "Rain Reign",
    author: "Ann M. Martin",
    author_question: true
  },
  {
    question: "Who is the author of 'Merci Suárez Changes Gears'?",
    title: "Merci Suárez Changes Gears",
    author: "Meg Medina",
    author_question: true
  },
  {
    question: "Who is the author of 'At the Bottom of the World'?",
    title: "At the Bottom of the World",
    author: "Bill Nye & Gregory Mone",
    author_question: true
  },
  {
    question: "Who is the author of 'The Lost Library'?",
    title: "The Lost Library",
    author: "Rebecca Stead & Wendy Mass",
    author_question: true
  },
  {
    question: "Who is the author of 'Nic Blake and the Remarkables: The Manifestor Prophecy'?",
    title: "Nic Blake and the Remarkables: The Manifestor Prophecy",
    author: "Angie Thomas",
    author_question: true
  },
  {
    question: "Who is the author of 'Save Me a Seat'?",
    title: "Save Me a Seat",
    author: "Sarah Weeks & Gita Varadarajan",
    author_question: true
  },
  
  
  {
    question: "Which book was written by Rebecca Balcárcel?",
    title: "Shine On, Luz Véliz!",
    author: "Rebecca Balcárcel",
    title_question: true
  },
  {
    question: "Which book was written by Sharon M. Draper?",
    title: "Stella by Starlight",
    author: "Sharon M. Draper",
    title_question: true
  },
  {
    question: "Which book was written by Erin Entrada Kelly?",
    title: "Hello, Universe",
    author: "Erin Entrada Kelly",
    title_question: true
  },
  {
    question: "Which book was written by Saadia Faruqi?",
    title: "Yusuf Azeem Is Not a Hero",
    author: "Saadia Faruqi",
    title_question: true
  },
  {
    question: "Which book was written by Alan Gratz?",
    title: "Ban This Book",
    author: "Alan Gratz",
    title_question: true
  },
  {
    question: "Which book was written by Jennifer L. Holm?",
    title: "The Fourteenth Goldfish",
    author: "Jennifer L. Holm",
    title_question: true
  },
  {
    question: "Which book was written by Lynda Mullaly Hunt?",
    title: "Shouting at the Rain",
    author: "Lynda Mullaly Hunt",
    title_question: true
  },
  {
    question: "Which book was written by Varian Johnson?",
    title: "The Parker Inheritance",
    author: "Varian Johnson",
    title_question: true
  },
  {
    question: "Which book was written by Kekla Magoon?",
    title: "Chester Keene Cracks the Code",
    author: "Kekla Magoon",
    title_question: true
  },
  {
    question: "Which book was written by Janae Marks?",
    title: "From the Desk of Zoe Washington",
    author: "Janae Marks",
    title_question: true
  },
  {
    question: "Which book was written by Ann M. Martin?",
    title: "Rain Reign",
    author: "Ann M. Martin",
    title_question: true
  },
  {
    question: "Which book was written by Meg Medina?",
    title: "Merci Suárez Changes Gears",
    author: "Meg Medina",
    title_question: true
  },
  {
    question: "Which book was written by Bill Nye & Gregory Mone?",
    title: "At the Bottom of the World",
    author: "Bill Nye & Gregory Mone",
    title_question: true
  },
  {
    question: "Which book was written by Rebecca Stead & Wendy Mass?",
    title: "The Lost Library",
    author: "Rebecca Stead & Wendy Mass",
    title_question: true
  },
  {
    question: "Which book was written by Angie Thomas?",
    title: "Nic Blake and the Remarkables: The Manifestor Prophecy",
    author: "Angie Thomas",
    title_question: true
  },
  {
    question: "Which book was written by Sarah Weeks & Gita Varadarajan?",
    title: "Save Me a Seat",
    author: "Sarah Weeks & Gita Varadarajan",
    title_question: true
  },
  
  
  
  
  
  
  
  
  
  
  {
    question: "In which book do resourceful kids use a homemade drone to spy on a mysterious, mirror-like building in Brooklyn?",
    title: "At the Bottom of the World",
    author: "Bill Nye & Gregory Mone"
  },
   {
    question: "Which narrative features a homemade spy drone that suddenly vanishes during a daring urban infiltration, prompting an all-out retrieval mission?",
    title: "At the Bottom of the World",
    author: "Bill Nye & Gregory Mone"
  },
  {
    question: "In which book do tech‐savvy youngsters risk it all—climbing hidden entrances and dodging futuristic security—to uncover the secrets behind a strange new building?",
    title: "At the Bottom of the World",
    author: "Bill Nye & Gregory Mone"
  },
  {
    question: "In which book does a talented boy at Albert Einstein Elementary silently plead for inclusion amidst a sea of unfamiliar faces?",
    title: "Save Me a Seat",
    author: "Sarah Weeks & Gita Varadarajan"
  },
  {
    question: "Which narrative features a student who, despite academic brilliance, faces isolation and miscommunication in his new American school, prompting a heartfelt request to be welcomed?",
    title: "Save Me a Seat",
    author: "Sarah Weeks & Gita Varadarajan"
  },
   {
    question: "In which book does a new student from India struggle with mispronunciations of his name and longs for a place to belong at his American school?",
    title: "Save Me a Seat",
    author: "Sarah Weeks & Gita Varadarajan"
  },
  
  {
    question: "What is the title of the novel about a young Manifestor who, on her twelfth birthday, must prove herself by venturing into a dense Mississippi forest to track down a terrifying, egg-and-Fritos–smelling beast, all while balancing the everyday excitement of birthday gifts and rebellious adventures?",
    title: "Nic Blake and the Remarkables: The Manifestor Prophecy",
    author: "Angie Thomas"
  },
  {
    question: "What is the title of the book where a girl, finally old enough to learn to use her supernatural Gift, embarks on a dangerous journey—dodging rules and capturing a hellhound that transforms from a monstrous threat into a tiny, tail-wagging pup.",
    title: "Nic Blake and the Remarkables: The Manifestor Prophecy",
    author: "Angie Thomas"
  },
  {
    question: "Which book describes the tale of a girl whose twelfth birthday unleashes a wild adventure, as she defies age-old rules, uses a net woven from enchanted material, and confronts a fearsome creature in the forest to begin her journey as a true Manifestor?",
    title: "Nic Blake and the Remarkables: The Manifestor Prophecy",
    author: "Angie Thomas"
  },
  {
    question: "Which narrative explores the collision of past and present as seen through the eyes of a sensitive cat and a determined young boy, both seeking meaning in remnants of a once-great library and the whispered secrets of their town?",
    title: "The Lost Library",
    author: "Rebecca Stead and Wendy Mass"
  },
  {
    question: "In which story does a young boy named Evan uncover mysteries surrounding a little free library filled with relics of a burned-down library, prompting him to become an amateur detective determined to unravel secrets from the past?",
    title: "The Lost Library",
    author: "Rebecca Stead and Wendy Mass"
  },
  {
    question: "Which narrative interweaves the perspectives of Mortimer, the gentle cat, and Evan, a reflective fifth grader, as they navigate personal loss, treasured memories, and the enduring magic of books in their small town?",
    title: "The Lost Library",
    author: "Rebecca Stead and Wendy Mass"
  },
  {
    question: "In which story does a young student describe her transition from carefree summer days to the structured demands of school life, where she must adapt to changing homerooms, participate in sports tryouts, and confront social expectations under the brutal Florida sun?",
    title: "Merci Suarez Changes Gears",
    author: "Meg Medina"
  },
  {
    question: "Which narrative centers on a sixth-grader’s internal struggle as she juggles the discomfort of a tight school blazer and fogged-up glasses in the heat, while also dealing with group projects, community service assignments, and the pressures of fitting in at a new academy?",
    title: "Merci Suarez Changes Gears",
    author: "Meg Medina"
  },
  {
    question: "Which story captures a young girl's day as she maneuvers through the chaos of a heated school campus—dodging maintenance areas, deciphering school rules, and coping with unsympathetic teachers—while all the while yearning for a shortcut to freedom?",
    title: "Merci Suarez Changes Gears",
    author: "Meg Medina"
  },
  {
    question: "In which story does the protagonist explain her love of words by listing her favorite homonyms, outlining the order of her interests (words, rules, numbers), and revealing details about her family’s routines and the challenges of following school rules?",
    title: "Rain Reign",
    author: "Ann M. Martin"
  },
  {
    question: "Which book follows a fifth-grade student who recounts how she must submit weekly progress reports at school and negotiate the complexities of home life—such as being driven by her uncle—while caring for her beloved pet dog (without naming it) that plays a key role in her daily routine?",
    title: "Rain Reign",
    author: "Ann M. Martin"
  },
  {
    question: "In which narrative does the main character discuss her classroom experiences, her passion for homonyms, and the humorous as well as challenging aspects of her daily school life, including interactions with teachers and classmates, all set against a backdrop of a tight family routine?",
    title: "Rain Reign",
    author: "Ann M. Martin"
  },

  {
    question: "Which book features a plot where a twelve-year-old dreams of becoming a pastry chef and interning at a local bakery, only to have her celebrations overshadowed by unexpected correspondence from her convict father?",
    title: "From the Desk of Zoe Washington",
    author: "Janae Marks"
  },
  {
    question: "Which narrative centers on a young girl wrestling with the discovery of letters from her estranged birth father, whose warm and remorseful words force her to question the true nature of his past and her own identity?",
    title: "From the Desk of Zoe Washington",
    author: "Janae Marks"
  },
  {
    question: "In which story does a young girl’s ideal birthday and budding baking dreams get upended by receiving a mysterious letter from a prison, compelling her to grapple with her absent father’s legacy?",
    title: "From the Desk of Zoe Washington",
    author: "Janae Marks"
  },
   {
    question: "Which book follows a boy who starts his day at exactly 6:35 AM—after lying in bed for five minutes—listening to Motown to get his morning routine started, and carefully notes every detail of his spy-like checklist?",
    title: "Chester Keene Cracks the Code",
    author: "Kekla Magoon"
  },
  {
    question: "Which story features a detailed account of the bus ride where the main character discreetly observes classmates—like noting Marla’s newly colored braces bands and Kevin’s ketchup-stained pants—while secretly adding these observations to his spy notebook?",
    title: "Chester Keene Cracks the Code",
    author: "Kekla Magoon"
  },
  {
    question: "In which book does the narrator mention a secret 'spy gear' item that he shares only with his dad, reflecting his desire to keep his life in order and be prepared for any mission, even while worrying about Dad’s delayed email?",
    title: "Chester Keene Cracks the Code",
    author: "Kekla Magoon"
  },
  {
    question: "In which book does Aimee Polloch burst in with the news that she got the lead in a summer production at the Cape Playhouse—and later ask the narrator, 'What’s it really like to be an orphan?'",
    title: "Shouting at the Rain",
    author: "Lynda Mullaly Hunt"
  },
  {
    question: "Which narrative captures the quirky moment when Grammy, while driving with the narrator, makes a cross on the dashboard and calls the car 'your ole Bridget' before they head off to pick up lunches and root beers?",
    title: "Shouting at the Rain",
    author: "Lynda Mullaly Hunt"
  },
  {
    question: "In which book does the narrator recall a summer day at Seaside when she and Brandy search for their old stone house—once built in second grade—only to find it gone, leaving behind memories of collected rocks and shells?",
    title: "Shouting at the Rain",
    author: "Lynda Mullaly Hunt"
  },
  {
    question: "Which book begins with a quirky preschool teacher named Starlily who sends her class home with a goldfish to teach them about the cycle of life?",
    title: "The Fourteenth Goldfish",
    author: "Jennifer L. Holm"
  },
  {
    question: "Which narrative recounts the humorous yet touching moment when the narrator holds a toilet-bowl funeral for Goldie Thirteen after learning that not all her goldfish were meant to live only two weeks?",
    title: "The Fourteenth Goldfish",
    author: "Jennifer L. Holm"
  },
  {
    question: "Which book features a protagonist reflecting on life in a tiny, shoebox-like home where even the clogged bathroom toilet becomes part of the everyday challenges she humorously endures?",
    title: "The Fourteenth Goldfish",
    author: "Jennifer L. Holm"
  },
  {
    question: "Which book follows an eleven-year-old boy who feels like a 'Grand Failure' on the last day of school, overwhelmed by the thought of long, challenging years ahead?",
    title: "Hello Universe",
    author: "Erin Entrada Kelly"
  },
  {
    question: "In which book does the protagonist, nicknamed 'Turtle' by his family, return home with a heavy heart—his disappointment echoing through a quiet house, as his Lola slices mangoes and recounts stories of the Stone Boy?",
    title: "Hello Universe",
    author: "Erin Entrada Kelly"
  },
  {
    question: "Which narrative features a young boy who struggles with self-image and feeling overlooked, finding small solace in the care of his pet guinea pig Gulliver while dreaming of friendship and adventure?",
    title: "Hello Universe",
    author: "Erin Entrada Kelly"
  },
   {
    question: "Which book features a chilling nighttime scene at Kilkenny Pond, where children hide behind an oak tree as robed figures in white hoods appear against the dark?",
    title: "Stella by Starlight",
    author: "Sharon M. Draper",
  },
   {
    question: "Which narrative recounts a tense moment when a child clutches her brother’s hand in fear of being seen by the Klan during a cold October night?",
    title: "Stella by Starlight",
    author: "Sharon M. Draper",
  },
  {
    question: "Which book portrays a family's urgent reaction as a father hastily warns his children after learning about a Klan presence near Kilkenny Pond?",
    title: "Stella by Starlight",
    author: "Sharon M. Draper",
  },
  
   {
    question: "Which book features the discovery of dusty photo frames, yearbooks from Perkins and Wallace, and a mysterious letter that hints at hidden fortunes?",
    title: "The Parker Inheritance",
    author: "Varian Johnson",
  },
  {
    question: "In which book do the protagonists explore a high school memorial where a plaque engraved with a Langston Hughes poem becomes a key clue?",
    title: "The Parker Inheritance",
    author: "Varian Johnson",
  },
  {
    question: "Which narrative presents a mystery where a series of artifacts—an unsigned letter, historical photos, and a trophy—lead to questions about an anonymous benefactor?",
    title: "The Parker Inheritance",
    author: "Varian Johnson",
  },
   {
    question: "In which book does the librarian, Mrs. Jones, explain that due to parental complaints, a cherished title has been removed from the school library?",
    title: "Ban This Book",
    author: "Alan Gratz"
  },
    {
    question: "Which book tells the story of a student who, after marking the return date on her calendar, finds her favorite book no longer on the shelf?",
    title: "Ban This Book",
    author: "Alan Gratz"
  },
  {
    question: "In which book is a young reader compelled to speak at a school board meeting to defend why her favorite book should remain in the library?",
    title: "Ban This Book",
    author: "Alan Gratz"
  }
  
];
