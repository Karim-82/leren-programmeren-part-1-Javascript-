SELECT d.dept_no, MAX(s.salary) AS hoogste_salaris
FROM employees e
INNER JOIN dept_emp de ON e.emp_no = de.emp_no
INNER JOIN salaries s ON e.emp_no = s.emp_no
INNER JOIN departments d ON de.dept_no = d.dept_no
GROUP BY d.dept_no;