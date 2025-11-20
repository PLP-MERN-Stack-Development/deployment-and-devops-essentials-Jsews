import React from 'react';


export default function CourseCard({ course }) {
return (
<article className="card">
<img src={course.image} alt={course.title} className="card-img" />
<div className="card-body">
<h3>{course.title}</h3>
<p>{course.description}</p>
<button className="btn-primary">Enroll</button>
</div>
</article>
);
}