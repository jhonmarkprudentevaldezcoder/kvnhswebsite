"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function StudentGrades() {
  const [grades, setGrades] = useState<StudentGrade[]>([]);
  const [loading, setLoading] = useState(true);

  type StudentGrade = {
    _id: string;
    ID: string;
    Surname: string;
    FirstName: string;
    GradeLevel: string;
    Strand: string;
    Section: string;
    Subject: string;
    Quiz: string;
    Activity: string;
    Assignment: string;
    LongTest: string;
    Project: string;
    Exams: string;
  };

  useEffect(() => {
    const userId = Cookies.get("userId");
    async function fetchStudentGrades() {
      try {
        const response = await fetch(
          `https://kvnshapi.onrender.com/student-grades/${userId}`
        );

        if (response.ok) {
          const data = await response.json();
          setGrades(data);
          console.log(data);
          console.log(userId);
        } else {
          console.error("Error fetching student grades.");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStudentGrades();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div id="About" className="mb-12 mt-12">
      <div
        className="h-96 bg-gray-200/50 bg-no-repeat"
        style={{
          backgroundImage: "url('/images/ban.jpg')",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="p-5">
        <div className="">
          <h2>Student Grades</h2>
          <table className="w-full p-4 shadow-lg  overflow-hidden">
            <thead>
              <tr className="border-gray-200">
                <th>ID</th>
                <th>Surname</th>
                <th>FirstName</th>
                <th>GradeLevel</th>
                <th>Strand</th>
                <th>Section</th>
                <th>Subject</th>
                <th>Quiz</th>
                <th>Activity</th>
                <th>Assignment</th>
                <th>LongTest</th>
                <th>Project</th>
                <th>Exams</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade) => (
                <tr key={grade._id}>
                  <td>{grade.ID}</td>
                  <td>{grade.Surname}</td>
                  <td>{grade.FirstName}</td>
                  <td>{grade.GradeLevel}</td>
                  <td>{grade.Strand}</td>
                  <td>{grade.Section}</td>
                  <td>{grade.Subject}</td>
                  <td>{grade.Quiz}</td>
                  <td>{grade.Activity}</td>
                  <td>{grade.Assignment}</td>
                  <td>{grade.LongTest}</td>
                  <td>{grade.Project}</td>
                  <td>{grade.Exams}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
