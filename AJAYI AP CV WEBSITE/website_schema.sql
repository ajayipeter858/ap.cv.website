CREATE TABLE personal_info (
  id INT AUTO_INCREMENT,
  name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(255),
  bio TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE education (
  id INT AUTO_INCREMENT,
  degree VARCHAR(255),
  institution VARCHAR(255),
  start_date DATE,
  end_date DATE,
  PRIMARY KEY (id)
);

CREATE TABLE work_experience (
  id INT AUTO_INCREMENT,
  job_title VARCHAR(255),
  company VARCHAR(255),
  start_date DATE,
  end_date DATE,
  description TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE skills (
  id INT AUTO_INCREMENT,
  skill VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE projects (
  id INT AUTO_INCREMENT,
  project_name VARCHAR(255),
  description TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE contact_form (
  id INT AUTO_INCREMENT,
  name VARCHAR(255),
  email VARCHAR(255),
  message TEXT,
  PRIMARY KEY (id)
);