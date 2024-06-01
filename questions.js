const citizenshipQuestions = [
  {
    question: "What is the supreme law of the land?",
    options: [
      "The Declaration of Independence",
      "The Federalist Papers",
      "The Constitution",
      "The Articles of Confederation",
    ],
    answer: "The Constitution",
  },
  {
    question: "What does the Constitution do?",
    options: [
      "Declares independence",
      "Sets up the government",
      "Creates laws",
      "Protects the rights of the people",
    ],
    answer: "Sets up the government",
  },
  {
    question:
      "The idea of self-government is in the first three words of the Constitution. What are these words?",
    options: [
      "We the Citizens",
      "We the People",
      "We the States",
      "We the Nation",
    ],
    answer: "We the People",
  },
  {
    question: "What is an amendment?",
    options: [
      "A preamble",
      "An introduction",
      "A change (to the Constitution)",
      "A conclusion",
    ],
    answer: "A change (to the Constitution)",
  },
  {
    question: "What do we call the first ten amendments to the Constitution?",
    options: [
      "The Federalist Papers",
      "The Bill of Rights",
      "The Declaration of Independence",
      "The Articles of Confederation",
    ],
    answer: "The Bill of Rights",
  },
  {
    question: "What is one right or freedom from the First Amendment?",
    options: [
      "Trial by jury",
      "Right to bear arms",
      "Freedom of speech",
      "Freedom of movement",
    ],
    answer: "Freedom of speech",
  },
  {
    question: "How many amendments does the Constitution have?",
    options: ["10", "27", "21", "15"],
    answer: "27",
  },
  {
    question: "What did the Declaration of Independence do?",
    options: [
      "Freed the slaves",
      "Gave women the right to vote",
      "Announced our independence (from Great Britain)",
      "Declared war on Britain",
    ],
    answer: "Announced our independence (from Great Britain)",
  },
  {
    question: "What are two rights in the Declaration of Independence?",
    options: [
      "Life and pursuit of happiness",
      "Freedom of speech and freedom of press",
      "Life and death",
      "Vote and bear arms",
    ],
    answer: "Life and pursuit of happiness",
  },
  {
    question: "What is freedom of religion?",
    options: [
      "You can practice any religion, or not practice a religion",
      "You can't practice any religion",
      "You must practice a religion",
      "You can practice only Christianity",
    ],
    answer: "You can practice any religion, or not practice a religion",
  },
  {
    question: "What is the economic system in the United States?",
    options: ["Socialism", "Communism", "Capitalist economy", "Barter system"],
    answer: "Capitalist economy",
  },
  {
    question: "What is the 'rule of law'?",
    options: [
      "Everyone must follow the law",
      "Only government officials must follow the law",
      "The president is above the law",
      "Laws do not apply to judges",
    ],
    answer: "Everyone must follow the law",
  },
  {
    question: "Name one branch or part of the government.",
    options: ["Military", "Parliament", "Congress", "Prime Minister"],
    answer: "Congress",
  },
  {
    question: "What stops one branch of government from becoming too powerful?",
    options: [
      "The President",
      "Checks and balances",
      "Federalism",
      "Democracy",
    ],
    answer: "Checks and balances",
  },
  {
    question: "Who is in charge of the executive branch?",
    options: [
      "Chief Justice",
      "Speaker of the House",
      "The President",
      "Vice President",
    ],
    answer: "The President",
  },
  {
    question: "Who makes federal laws?",
    options: ["The President", "The Supreme Court", "Congress", "The states"],
    answer: "Congress",
  },
  {
    question: "What are the two parts of the U.S. Congress?",
    options: [
      "The Senate and House of Representatives",
      "The Senate and the Cabinet",
      "The House of Commons and the House of Lords",
      "The House of Representatives and the Supreme Court",
    ],
    answer: "The Senate and House of Representatives",
  },
  {
    question: "How many U.S. Senators are there?",
    options: ["50", "100", "435", "535"],
    answer: "100",
  },
  {
    question: "We elect a U.S. Senator for how many years?",
    options: ["4", "6", "2", "8"],
    answer: "6",
  },
  {
    question: "The House of Representatives has how many voting members?",
    options: ["100", "435", "535", "50"],
    answer: "435",
  },
  {
    question: "We elect a U.S. Representative for how many years?",
    options: ["4", "6", "2", "8"],
    answer: "2",
  },
  {
    question: "Who does a U.S. Senator represent?",
    options: [
      "All people of the state",
      "The President",
      "The state's legislature",
      "The state's governor",
    ],
    answer: "All people of the state",
  },
  {
    question: "Why do some states have more Representatives than other states?",
    options: [
      "Because of the state's size",
      "Because of the state's population",
      "Because of the state's wealth",
      "Because of the state's location",
    ],
    answer: "Because of the state's population",
  },
  {
    question: "We elect a President for how many years?",
    options: ["2", "4", "6", "8"],
    answer: "4",
  },
  {
    question: "In what month do we vote for President?",
    options: ["January", "November", "October", "December"],
    answer: "November",
  },
  {
    question: "What is the name of the President of the United States now?",
    options: ["Donald Trump", "Joe Biden", "Barack Obama", "George Bush"],
    answer: "Joe Biden",
  },
  {
    question:
      "What is the name of the Vice President of the United States now?",
    options: ["Kamala Harris", "Mike Pence", "Nancy Pelosi", "Dick Cheney"],
    answer: "Kamala Harris",
  },
  {
    question: "If the President can no longer serve, who becomes President?",
    options: [
      "The Speaker of the House",
      "The Chief Justice",
      "The Vice President",
      "The Secretary of State",
    ],
    answer: "The Vice President",
  },
  {
    question:
      "If both the President and the Vice President can no longer serve, who becomes President?",
    options: [
      "The Speaker of the House",
      "The Chief Justice",
      "The Secretary of State",
      "The Secretary of Defense",
    ],
    answer: "The Speaker of the House",
  },
  {
    question: "Who is the Commander in Chief of the military?",
    options: [
      "The Secretary of Defense",
      "The Vice President",
      "The President",
      "The Chairman of the Joint Chiefs of Staff",
    ],
    answer: "The President",
  },
  {
    question: "Who signs bills to become laws?",
    options: [
      "The Speaker of the House",
      "The Chief Justice",
      "The President",
      "The Vice President",
    ],
    answer: "The President",
  },
  {
    question: "Who vetoes bills?",
    options: [
      "The Speaker of the House",
      "The Chief Justice",
      "The President",
      "The Vice President",
    ],
    answer: "The President",
  },
  {
    question: "What does the President's Cabinet do?",
    options: [
      "Makes laws",
      "Advises the President",
      "Commands the military",
      "Interprets laws",
    ],
    answer: "Advises the President",
  },
  {
    question: "What are two Cabinet-level positions?",
    options: [
      "Secretary of Defense and Secretary of State",
      "Secretary of Health and Human Services and Secretary of Education",
      "Secretary of Agriculture and Secretary of the Treasury",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "What does the judicial branch do?",
    options: [
      "Makes laws",
      "Enforces laws",
      "Interprets laws",
      "All of the above",
    ],
    answer: "Interprets laws",
  },
  {
    question: "What is the highest court in the United States?",
    options: [
      "The Supreme Court",
      "The Court of Appeals",
      "The District Court",
      "The Federal Court",
    ],
    answer: "The Supreme Court",
  },
  {
    question: "How many justices are on the Supreme Court?",
    options: ["6", "9", "12", "15"],
    answer: "9",
  },
  {
    question: "Who is the Chief Justice of the United States now?",
    options: [
      "John Roberts",
      "Ruth Bader Ginsburg",
      "Sonia Sotomayor",
      "Elena Kagan",
    ],
    answer: "John Roberts",
  },
  {
    question:
      "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
    options: [
      "To print money",
      "To declare war",
      "To create an army",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question:
      "Under our Constitution, some powers belong to the states. What is one power of the states?",
    options: [
      "To print money",
      "To declare war",
      "To create an army",
      "To provide schooling and education",
    ],
    answer: "To provide schooling and education",
  },
  {
    question: "Who is the Governor of your state now?",
    options: ["Names will vary by state"],
    answer: "Names will vary by state", // Update with the correct answer for the specific state
  },
  {
    question: "What is the capital of your state?",
    options: ["Cities will vary by state"],
    answer: "Cities will vary by state", // Update with the correct capital city for the specific state
  },
  {
    question: "What are the two major political parties in the United States?",
    options: [
      "Democratic and Green",
      "Republican and Libertarian",
      "Democratic and Republican",
      "Green and Libertarian",
    ],
    answer: "Democratic and Republican",
  },
  {
    question: "What is the political party of the President now?",
    options: ["Democratic", "Republican"],
    answer: "Democratic", // Update if necessary depending on the current president
  },
  {
    question:
      "What is the name of the Speaker of the House of Representatives now?",
    options: ["Nancy Pelosi", "John Boehner", "Paul Ryan", "Kevin McCarthy"],
    answer: "Nancy Pelosi", // Update if necessary depending on the current Speaker
  },
  {
    question:
      "There are four amendments to the Constitution about who can vote. Describe one of them.",
    options: [
      "Citizens eighteen and older can vote",
      "Only citizens with a job can vote",
      "Only men can vote",
      "Citizens must own land to vote",
    ],
    answer: "Citizens eighteen and older can vote",
  },
  {
    question:
      "What is one responsibility that is only for United States citizens?",
    options: ["Pay taxes", "Obey the law", "Serve on a jury", "Attend school"],
    answer: "Serve on a jury",
  },
  {
    question: "Name one right only for United States citizens.",
    options: [
      "Freedom of speech",
      "Right to vote",
      "Freedom of religion",
      "Right to bear arms",
    ],
    answer: "Right to vote",
  },
  {
    question: "What are two rights of everyone living in the United States?",
    options: [
      "Freedom of speech and freedom of worship",
      "Right to bear arms and right to vote",
      "Freedom to petition the government and right to disobey traffic laws",
      "Freedom of assembly and right to make treaties",
    ],
    answer: "Freedom of speech and freedom of worship",
  },
  {
    question:
      "What do we show loyalty to when we say the Pledge of Allegiance?",
    options: ["The United States", "The President", "Congress", "The flag"],
    answer: "The United States",
  },
  {
    question:
      "What is one promise you make when you become a United States citizen?",
    options: [
      "Obey the laws of the United States",
      "Disobey the laws of other countries",
      "Not change your nationality",
      "Never travel abroad",
    ],
    answer: "Obey the laws of the United States",
  },
  {
    question: "How old do citizens have to be to vote for President?",
    options: ["16", "18", "21", "25"],
    answer: "18",
  },
  {
    question:
      "What are two ways that Americans can participate in their democracy?",
    options: [
      "Vote and run for office",
      "Join a civic group and sing the national anthem",
      "Protest and sing a song",
      "Pay taxes and travel",
    ],
    answer: "Vote and run for office",
  },
  {
    question: "When is the last day you can send in federal income tax forms?",
    options: ["April 15", "May 15", "July 4", "January 1"],
    answer: "April 15",
  },
  {
    question: "When must all men register for the Selective Service?",
    options: ["At age 16", "At age 18", "At age 21", "At age 25"],
    answer: "At age 18",
  },
  {
    question: "What is one reason colonists came to America?",
    options: [
      "For the weather",
      "To join native tribes",
      "Freedom",
      "To build factories",
    ],
    answer: "Freedom",
  },
  {
    question: "Who lived in America before the Europeans arrived?",
    options: ["Africans", "Pacific Islanders", "American Indians", "No one"],
    answer: "American Indians",
  },
  {
    question: "What group of people was taken to America and sold as slaves?",
    options: ["Africans", "Europeans", "Asians", "South Americans"],
    answer: "Africans",
  },
  {
    question: "Why did the colonists fight the British?",
    options: [
      "Because of high taxes",
      "Because the British invaded India",
      "Because they didn't like British tea",
      "Because they wanted to speak English",
    ],
    answer: "Because of high taxes",
  },
  {
    question: "Who wrote the Declaration of Independence?",
    options: [
      "George Washington",
      "Thomas Jefferson",
      "Abraham Lincoln",
      "Benjamin Franklin",
    ],
    answer: "Thomas Jefferson",
  },
  {
    question: "When was the Declaration of Independence adopted?",
    options: [
      "July 4, 1776",
      "December 25, 1776",
      "April 15, 1775",
      "January 1, 1777",
    ],
    answer: "July 4, 1776",
  },
  {
    question: "There were 13 original states. Name three.",
    options: [
      "New York, Virginia, Florida",
      "New Hampshire, Massachusetts, Georgia",
      "Washington, Oregon, California",
      "Ohio, Michigan, Wisconsin",
    ],
    answer: "New Hampshire, Massachusetts, Georgia",
  },
  {
    question: "What happened at the Constitutional Convention?",
    options: [
      "The Constitution was written",
      "The Declaration of Independence was written",
      "The Emancipation Proclamation was signed",
      "The Articles of Confederation were written",
    ],
    answer: "The Constitution was written",
  },
  {
    question: "When was the Constitution written?",
    options: ["1776", "1787", "1790", "1801"],
    answer: "1787",
  },
  {
    question:
      "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
    options: [
      "James Madison",
      "Thomas Jefferson",
      "John Adams",
      "George Washington",
    ],
    answer: "James Madison",
  },
  {
    question: "What is one thing Benjamin Franklin is famous for?",
    options: [
      "U.S. diplomat",
      "Youngest member of the Constitutional Convention",
      "First person to walk on the moon",
      "Invented the airplane",
    ],
    answer: "U.S. diplomat",
  },
  {
    question: "Who is the 'Father of Our Country'?",
    options: [
      "Thomas Jefferson",
      "George Washington",
      "Abraham Lincoln",
      "Benjamin Franklin",
    ],
    answer: "George Washington",
  },
  {
    question: "Who was the first President?",
    options: [
      "Thomas Jefferson",
      "George Washington",
      "Abraham Lincoln",
      "Benjamin Franklin",
    ],
    answer: "George Washington",
  },
  {
    question: "What territory did the United States buy from France in 1803?",
    options: ["Alaska", "Louisiana", "California", "Texas"],
    answer: "Louisiana",
  },
  {
    question: "Name one war fought by the United States in the 1800s.",
    options: [
      "World War I",
      "The Civil War",
      "The Spanish-American War",
      "The Korean War",
    ],
    answer: "The Civil War",
  },
  {
    question: "Name the U.S. war between the North and the South.",
    options: [
      "The Revolutionary War",
      "The Civil War",
      "The Korean War",
      "World War II",
    ],
    answer: "The Civil War",
  },
  {
    question: "Name one problem that led to the Civil War.",
    options: ["Slavery", "Oil", "Taxes on tea", "Witch trials"],
    answer: "Slavery",
  },
  {
    question: "What was one important thing that Abraham Lincoln did?",
    options: [
      "Founded the Red Cross",
      "Established Thanksgiving as a national holiday",
      "Freed the slaves (Emancipation Proclamation)",
      "Invented the lightbulb",
    ],
    answer: "Freed the slaves (Emancipation Proclamation)",
  },
  {
    question: "What did the Emancipation Proclamation do?",
    options: [
      "Gave the United States independence from Britain",
      "Freed the slaves",
      "Proclaimed the official language to be English",
      "Made Thanksgiving a holiday",
    ],
    answer: "Freed the slaves",
  },
  {
    question: "What did Susan B. Anthony do?",
    options: [
      "Founded the Red Cross",
      "Fought for women's rights",
      "Made the first flag of the United States",
      "Discovered electricity",
    ],
    answer: "Fought for women's rights",
  },
  {
    question: "Name one war fought by the United States in the 1900s.",
    options: [
      "The Civil War",
      "The Spanish-American War",
      "World War II",
      "The French and Indian War",
    ],
    answer: "World War II",
  },
  {
    question: "Who was President during World War I?",
    options: [
      "Woodrow Wilson",
      "Franklin Roosevelt",
      "Harry Truman",
      "Dwight Eisenhower",
    ],
    answer: "Woodrow Wilson",
  },
  {
    question: "Who was President during the Great Depression and World War II?",
    options: [
      "Franklin Roosevelt",
      "Herbert Hoover",
      "Harry Truman",
      "John F. Kennedy",
    ],
    answer: "Franklin Roosevelt",
  },
  {
    question: "Who did the United States fight in World War II?",
    options: [
      "Japan, Germany, and Italy",
      "Soviet Union, Germany, and Italy",
      "Japan, China, and Vietnam",
      "Britain, France, and Germany",
    ],
    answer: "Japan, Germany, and Italy",
  },
  {
    question:
      "Before he was President, Eisenhower was a general. What war was he in?",
    options: ["Vietnam War", "Korean War", "World War II", "World War I"],
    answer: "World War II",
  },
  {
    question:
      "During the Cold War, what was the main concern of the United States?",
    options: ["Communism", "Imperialism", "Fascism", "Terrorism"],
    answer: "Communism",
  },
  {
    question: "What movement tried to end racial discrimination?",
    options: [
      "Civil Rights Movement",
      "Environmental Movement",
      "Women's Suffrage Movement",
      "Labor Movement",
    ],
    answer: "Civil Rights Movement",
  },
  {
    question: "What did Martin Luther King, Jr. do?",
    options: [
      "Fought for women's suffrage",
      "Led the Civil Rights Movement",
      "Became the first black President of the United States",
      "Invented the internet",
    ],
    answer: "Led the Civil Rights Movement",
  },
  {
    question:
      "What major event happened on September 11, 2001, in the United States?",
    options: [
      "The attack on Pearl Harbor",
      "The signing of the Declaration of Independence",
      "The terrorist attacks on the World Trade Center and the Pentagon",
      "The end of the Civil War",
    ],
    answer: "The terrorist attacks on the World Trade Center and the Pentagon",
  },
  {
    question: "Name one American Indian tribe in the United States.",
    options: ["Zulu", "Apache", "Celtic", "Maori"],
    answer: "Apache",
  },
  {
    question: "Name one of the two longest rivers in the United States.",
    options: ["Colorado River", "Missouri River", "Rio Grande", "Nile River"],
    answer: "Missouri River",
  },
  {
    question: "What ocean is on the West Coast of the United States?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    answer: "Pacific",
  },
  {
    question: "What ocean is on the East Coast of the United States?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    answer: "Atlantic",
  },
  {
    question: "Name one U.S. territory.",
    options: ["Puerto Rico", "Bermuda", "Greenland", "Sicily"],
    answer: "Puerto Rico",
  },
  {
    question: "Name one state that borders Canada.",
    options: ["California", "Florida", "Maine", "Texas"],
    answer: "Maine",
  },
  {
    question: "Name one state that borders Mexico.",
    options: ["California", "Florida", "Alaska", "Ohio"],
    answer: "California",
  },
  {
    question: "What is the capital of the United States?",
    options: [
      "New York City",
      "Washington, D.C.",
      "Los Angeles",
      "San Francisco",
    ],
    answer: "Washington, D.C.",
  },
  {
    question: "Where is the Statue of Liberty?",
    options: [
      "Harbor of San Francisco",
      "Liberty Island, New York",
      "Near the Mississippi River",
      "Washington, D.C.",
    ],
    answer: "Liberty Island, New York",
  },
  {
    question: "Why does the flag have 13 stripes?",
    options: [
      "For the 13 original colonies",
      "For the 13 original presidents",
      "For the 13 treaties of the United States",
      "For the 13 languages spoken in the United States",
    ],
    answer: "For the 13 original colonies",
  },
  {
    question: "Why does the flag have 50 stars?",
    options: [
      "For each state in the Union",
      "For each amendment to the Constitution",
      "For each President of the United States",
      "For each year since the Declaration of Independence",
    ],
    answer: "For each state in the Union",
  },
  {
    question: "What is the name of the national anthem?",
    options: [
      "God Save the Queen",
      "Star-Spangled Banner",
      "America the Beautiful",
      "Stars and Stripes Forever",
    ],
    answer: "Star-Spangled Banner",
  },
];

export default citizenshipQuestions;
