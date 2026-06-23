export type StaffMember = {
  id: string;
  name: string;
  subject: string;
  department: string;
  isClassTeacher: boolean;
  assignedClass: string | null;
  classTeacherEffectiveSession: string | null;
  status: "Active" | "Available";
};

export type PromotionRequest = {
  id: string;
  studentName: string;
  currentClass: string;
  proposedNextClass: string;
  recommendation: "Promote" | "Repeat" | "Withdraw" | "Transfer";
  reason: string;
  submittedBy: string;
  principalDecision: "Pending" | "Approved" | "Returned for Review";
};

export const principalProfile = {
  name: "Principal",
  username: "principal@mcc.edu.ng",
  email: "principal@mcc.edu.ng",
  role: "Principal",
  session: "2024/2025",
  motto: "Faith. Knowledge. Service.",
};

export const academicSessions = ["2024/2025", "2025/2026"];

export const staffMembers: StaffMember[] = [
  { id: "STF001", name: "Mr. Daniel Otoro", subject: "Mathematics", department: "Sciences", isClassTeacher: true, assignedClass: "SS2B", classTeacherEffectiveSession: "2024/2025 First Term", status: "Active" },
  { id: "STF002", name: "Mrs. Laura Mensah", subject: "English Language", department: "Arts", isClassTeacher: true, assignedClass: "JSS3A", classTeacherEffectiveSession: "2024/2025 First Term", status: "Active" },
  { id: "STF003", name: "Mr. Peter Abiola", subject: "Physics", department: "Sciences", isClassTeacher: false, assignedClass: null, classTeacherEffectiveSession: null, status: "Available" },
  { id: "STF004", name: "Mrs. Grace Eze", subject: "Chemistry", department: "Sciences", isClassTeacher: false, assignedClass: null, classTeacherEffectiveSession: null, status: "Available" },
  { id: "STF005", name: "Mrs. Aisha Mohammed", subject: "Civic Education", department: "Humanities", isClassTeacher: true, assignedClass: "SS1E", classTeacherEffectiveSession: "2024/2025 First Term", status: "Active" },
  { id: "STF006", name: "Mr. Joseph Udo", subject: "Biology", department: "Sciences", isClassTeacher: false, assignedClass: null, classTeacherEffectiveSession: null, status: "Available" },
  { id: "STF007", name: "Mrs. Chinoma Obi", subject: "Accountancy", department: "Commercial", isClassTeacher: false, assignedClass: null, classTeacherEffectiveSession: null, status: "Available" },
];

export const unassignedClasses = [
  { className: "JSS2B", students: 28 },
  { className: "SS2A", students: 32 },
  { className: "SS3C", students: 26 },
];

export const students = [
  { id: "STU4001", name: "John Adebayo", className: "SS3A", gender: "Male", status: "Active", academicStanding: "Good", classTeacher: "Mr. Daniel Otoro" },
  { id: "STU4002", name: "Chiamaka Okafor", className: "SS2B", gender: "Female", status: "Active", academicStanding: "Average", classTeacher: "Unassigned" },
  { id: "STU4003", name: "Samuel Ibrahim", className: "SS1E", gender: "Male", status: "Active", academicStanding: "Excellent", classTeacher: "Mrs. Aisha Mohammed" },
  { id: "STU4004", name: "Blessing Nwosu", className: "JSS3A", gender: "Female", status: "Withdrawn", academicStanding: "-", classTeacher: "Mrs. Laura Mensah" },
  { id: "STU4005", name: "David Cooper", className: "SS3A", gender: "Male", status: "Transfer", academicStanding: "Good", classTeacher: "Mr. Daniel Otoro" },
  { id: "STU4006", name: "Esther Bassey", className: "SS2A", gender: "Female", status: "Repeat", academicStanding: "Needs Support", classTeacher: "Unassigned" },
];

export const promotionRequests: PromotionRequest[] = [
  { id: "PR001", studentName: "John Adebayo", currentClass: "JSS3A", proposedNextClass: "SS1", recommendation: "Promote", reason: "Met promotion criteria", submittedBy: "Mrs. Laura Mensah", principalDecision: "Pending" },
  { id: "PR002", studentName: "Chiamaka Okafor", currentClass: "SS2B", proposedNextClass: "SS3", recommendation: "Repeat", reason: "Below average performance", submittedBy: "Mr. Daniel Otoro", principalDecision: "Pending" },
  { id: "PR003", studentName: "Samuel Ibrahim", currentClass: "SS1E", proposedNextClass: "SS2", recommendation: "Promote", reason: "Met promotion criteria", submittedBy: "Mrs. Aisha Mohammed", principalDecision: "Approved" },
  { id: "PR004", studentName: "Blessing Nwosu", currentClass: "JSS2C", proposedNextClass: "JSS3", recommendation: "Withdraw", reason: "Personal / family reasons", submittedBy: "Mr. Peter Abiola", principalDecision: "Pending" },
  { id: "PR005", studentName: "David Cooper", currentClass: "SS3A", proposedNextClass: "Graduated", recommendation: "Transfer", reason: "Relocating", submittedBy: "Mr. Joseph Udo", principalDecision: "Returned for Review" },
];

export const staffRoleChanges = [
  { staffName: "Mr. Daniel Otoro", previousRole: "Subject Teacher", newRole: "Class Teacher", effectiveDate: "12 May 2024", status: "Active" },
  { staffName: "Mrs. Laura Mensah", previousRole: "Subject Teacher", newRole: "HOD - English", effectiveDate: "08 May 2024", status: "Active" },
  { staffName: "Mr. Peter Abiola", previousRole: "Class Teacher", newRole: "Subject Teacher", effectiveDate: "05 May 2024", status: "Updated" },
];

export const reports = [
  { title: "Student Population by Class", description: "Overview of student enrolment by class.", category: "Student Population" },
  { title: "Class Teacher Assignment Report", description: "List of classes and assigned class teachers.", category: "Staff Reports" },
  { title: "Promotion History Report", description: "History of student promotion decisions.", category: "Promotion Reports" },
  { title: "Repeat / Withdraw Cases", description: "Detailed list of special final judgement cases.", category: "Promotion Reports" },
  { title: "Result Submission Status", description: "Track result submission status by class and term.", category: "Result Submission" },
  { title: "Staff List Report", description: "Comprehensive list of teaching and non-teaching staff.", category: "Staff Reports" },
];

export const principalStats = {
  pendingApprovals: promotionRequests.filter((item) => item.principalDecision === "Pending").length,
  totalStudents: 1248,
  activeStudents: 1162,
  withdrawn: 42,
  transferCases: 28,
  repeatCases: 16,
  teachingStaff: staffMembers.length,
  classTeachers: staffMembers.filter((staff) => staff.isClassTeacher).length,
  nonClassTeachers: staffMembers.filter((staff) => !staff.isClassTeacher).length,
  unassignedClasses: unassignedClasses.length,
  currentSession: "2024/2025",
};
