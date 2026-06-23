import { Award, BookOpen, GraduationCap, School, Shield, Trophy, Users } from "lucide-react";

export const publicNav = [
  "Home",
  "About MCC",
  "Academics",
  "Admissions",
  "Life at MCC",
  "News & Events",
  "Contact",
];

export const megaMenus = {
  "About MCC": {
    columns: [
      { title: "Who We Are", items: ["History of MCC", "Mission & Vision", "Catholic Identity"] },
      { title: "Leadership", items: ["Principal's Message", "School Management"] },
      { title: "Campus", items: ["Facilities", "Learning Spaces", "Science Laboratories"] },
    ],
    feature: {
      title: "A Message From Our Principal",
      text: "Nurturing faith, building character, and inspiring excellence in every child.",
      button: "Read Message",
      image: "/images/placeholder2.png",
    },
  },
  Academics: {
    columns: [
      { title: "School Levels", items: ["Junior Secondary School", "Senior Secondary School"] },
      { title: "Departments", items: ["Sciences", "Arts & Humanities", "Commercial Studies"] },
      { title: "Academic Life", items: ["Curriculum", "Academic Calendar", "Assessment System"] },
    ],
    feature: {
      stat: "95%",
      label: "External Examination Success Rate",
      text: "WAEC • NECO",
      button: "Explore Academics",
      image: "/images/placeholder2.png",
    },
  },
  Admissions: {
    columns: [
      { title: "Admissions Process", items: ["How to Apply", "Entry Requirements", "Admission Timeline", "Download Admission Form"] },
    ],
    feature: {
      title: "Admissions Open",
      text: "Applications are open for the 2026/2027 academic session.",
      button: "Apply Now",
      image: "/images/placeholder2.png",
    },
  },
  "Life at MCC": {
    columns: [
      { title: "Student Life", items: ["Sports", "Music & Arts", "Religious Life"] },
      { title: "Formation", items: ["Leadership", "Clubs & Societies"] },
      { title: "Beyond Class", items: ["Excursions", "Events & Activities"] },
    ],
    feature: {
      title: "Life at Madonna Catholic College",
      text: "A balanced school life shaped by faith, friendship, discipline, and meaningful activities.",
      button: "Explore Life at MCC",
      image: "/images/placeholder2.png",
    },
  },
  "News & Events": {
    columns: [
      { title: "Latest News", items: ["Academic Achievements", "School Activities", "Competition Results"] },
      { title: "Events", items: ["Upcoming Events", "School Calendar"] },
      { title: "Media", items: ["Photo Gallery", "Videos"] },
    ],
    feature: {
      title: "MCC Students Win National Science Competition",
      text: "Our brilliant students emerged winners at the 2024 National Science Fair.",
      button: "Read Full Story",
      image: "/images/placeholder2.png",
    },
  },
  Contact: {
    columns: [
      { title: "Get in Touch", items: ["Admissions Office", "Academic Office", "General Enquiries"] },
      { title: "Visit Us", items: ["Our Location", "Get Directions"] },
    ],
    feature: {
      title: "Madonna Catholic College",
      text: "Okija, Anambra State, Nigeria",
      button: "View on Google Maps",
      image: "/images/placeholder2.png",
    },
  },
};

export const homeStats = [
  { value: "850+", label: "Students", icon: Users },
  { value: "45+", label: "Qualified Teachers", icon: GraduationCap },
  { value: "20+", label: "Years of Excellence", icon: School },
  { value: "95%", label: "Exam Success Rate", icon: Trophy },
];

export const whyChoose = [
  { title: "Faith-Based Education", text: "Grounded in Catholic values that nurture the spirit, build character, and strengthen faith.", icon: Shield },
  { title: "Academic Excellence", text: "High-quality teaching, innovation, and a commitment to outstanding academic results.", icon: BookOpen },
  { title: "Character Formation", text: "Developing integrity, leadership, compassion, and a sense of service to others.", icon: Award },
];

export const academicProgrammes = [
  "Junior Secondary School",
  "Senior Secondary School",
  "Science Programme",
  "Arts & Humanities",
  "Commercial Studies",
  "ICT & Innovation",
  "Languages",
  "Extra-Curricular Activities",
];

export const facilities = [
  "Science Laboratories",
  "Library",
  "ICT Centre",
  "School Chapel",
  "Sports Complex",
  "Modern Classrooms",
];

export const lifeAtMcc = [
  "Sports & Athletics",
  "Clubs & Societies",
  "Religious Life",
  "Leadership Training",
  "Excursions & Events",
];

export const publicNews = [
  { title: "MCC Students Excel in 2024 WAEC Results", date: "May 12, 2024", text: "Celebrating outstanding performance across all subjects.", image: "/images/placeholder2.png" },
  { title: "Inter-House Sports Competition 2024", date: "May 5, 2024", text: "A thrilling display of talent, teamwork, and school spirit.", image: "/images/placeholder2.png" },
  { title: "Thanksgiving Mass & Prize Giving Day", date: "April 28, 2024", text: "Honouring excellence and giving thanks for a successful term.", image: "/images/placeholder2.png" },
];

export const admissionSteps = [
  { step: "1", title: "Submit Application", text: "Complete the online application form." },
  { step: "2", title: "Entrance Assessment", text: "Candidates sit for our entrance examination." },
  { step: "3", title: "Interview & Review", text: "Interview with parents and candidate." },
  { step: "4", title: "Admission Offer", text: "Successful candidates receive admission offer." },
];

export const testimonials = [
  { quote: "MCC has been a blessing to our family. The school combines academic excellence with strong moral values.", name: "Mrs. Ifeoma Okafor", role: "Parent" },
  { quote: "The teachers are amazing. They care about us and always encourage us to be the best version of ourselves.", name: "Chisom Nwosu", role: "SS2 Student" },
  { quote: "MCC shaped my life. The discipline, values, and education I received prepared me for university and beyond.", name: "Emeka Obi", role: "Alumni, Class of 2018" },
];

export const portalStudent = {
  name: "Alex Turner",
  studentId: "MCC/SS2/0241",
  className: "SS2 Science",
  session: "2025/2026",
  term: "Second Term",
  email: "alex.turner@mcc.edu.ng",
  gender: "Female",
  dateOfBirth: "May 16, 2009",
  guardian: "Mrs. Helen Turner",
  guardianPhone: "+234 803 456 7890",
  photo: "/images/user-avatar.png",
};

export const portalResults = [
  { subject: "Mathematics", ca: 28, exam: 62, total: 90, grade: "A1", remark: "Excellent" },
  { subject: "English Language", ca: 25, exam: 58, total: 83, grade: "B2", remark: "Very Good" },
  { subject: "Physics", ca: 27, exam: 61, total: 88, grade: "A1", remark: "Excellent" },
  { subject: "Chemistry", ca: 24, exam: 56, total: 80, grade: "B2", remark: "Very Good" },
  { subject: "Biology", ca: 26, exam: 59, total: 85, grade: "A1", remark: "Excellent" },
];

export const portalEvents = [
  { title: "Thanksgiving Mass", date: "June 9, 2026", location: "School Chapel", text: "Whole-school mass and thanksgiving service." },
  { title: "Parents Visiting Day", date: "June 15, 2026", location: "Main Campus", text: "Parents are invited to meet form teachers." },
  { title: "Science Practical Week", date: "June 22, 2026", location: "Science Laboratories", text: "Practical sessions for senior science students." },
];

export const staff = [
  { name: "Sr. Mary Clare Eze, DMMM", role: "Principal", department: "School Leadership", phone: "+234 803 111 1000", email: "principal@mcc.edu.ng", pinned: true },
  { name: "Mr. Anthony Okeke", role: "Vice Principal Academic", department: "Administration", phone: "+234 803 111 1001", email: "vp.academic@mcc.edu.ng", pinned: true },
  { name: "Mrs. Grace Nwafor", role: "Vice Principal Administration", department: "Administration", phone: "+234 803 111 1002", email: "vp.admin@mcc.edu.ng", pinned: true },
  { name: "Mr. Daniel Obi", role: "ICT Support Officer", department: "ICT Support", phone: "+234 803 111 1003", email: "ict@mcc.edu.ng", pinned: true },
  { name: "Mrs. Helen Umeh", role: "School Administrator", department: "Administration", phone: "+234 803 111 1004", email: "admin@mcc.edu.ng", pinned: true },
  { name: "Mr. John Okafor", role: "Mathematics Teacher", department: "Sciences", phone: "+234 803 222 1001", email: "john.okafor@mcc.edu.ng" },
  { name: "Mrs. Grace Eze", role: "Physics Teacher", department: "Sciences", phone: "+234 803 222 1002", email: "grace.eze@mcc.edu.ng" },
  { name: "Mrs. Mary Uche", role: "English Language Teacher", department: "Arts & Humanities", phone: "+234 803 222 1003", email: "mary.uche@mcc.edu.ng" },
  { name: "Mr. Emma Otoro", role: "Government Teacher", department: "Arts & Humanities", phone: "+234 803 222 1004", email: "emma.otoro@mcc.edu.ng" },
];
