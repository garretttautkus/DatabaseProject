CREATE TABLE ORGANIZATION
	(
	  OName CHARACTER VARYING(255) NOT NULL,
	  OAddress CHARACTER VARYING(255) NOT NULL,
	  OCity CHARACTER VARYING(255) NOT NULL,
	  OState CHARACTER VARYING(14) NOT NULL,
	  OZip INT NOT NULL,
	  OEmail CHARACTER VARYING(255) NOT NULL,
	  OPhone CHAR(10) NOT NULL,
	  OID SERIAL NOT NULL,
	  PRIMARY KEY (OID)
	);
	CREATE TABLE HOTEL
	(
	HMaxMeetSize CHARACTER VARYING(255) NOT NULL,
	HName CHARACTER VARYING(255) NOT NULL,
	HState CHARACTER VARYING(50) NOT NULL,
	HZip INT NOT NULL,
	HAddress CHARACTER VARYING(255) NOT NULL,
	HContactPhone CHAR(10) NOT NULL,
	HPhone CHAR(10) NOT NULL,
	HNumRooms INT NOT NULL,
	HCity VARCHAR(255) NOT NULL,
	PRIMARY KEY (HName)
	);
	CREATE TABLE CONFERENCE
	(
	  CName CHARACTER VARYING(255) NOT NULL,
	  CID SERIAL NOT NULL,
	  CStartDate DATE NOT NULL,
	  CEndDate DATE NOT NULL,
	  CCity CHARACTER VARYING(255) NOT NULL,
	  CFee INT NOT NULL,
	  CAttendance INT NOT NULL,
	  CBudget FLOAT NOT NULL,
	  HName CHARACTER VARYING(255) NOT NULL,
	  PRIMARY KEY (CID),
	  OID SERIAL,
	  FOREIGN KEY (OID) REFERENCES ORGANIZATION(OID),
	  FOREIGN KEY (HName) REFERENCES HOTEL(HName)
	);
	CREATE TABLE ATTENDEE
	(
	  AName CHARACTER VARYING(255) NOT NULL,
	  APhone CHAR(255) NOT NULL,
	  ADiscount INT NOT NULL,
	  AID SERIAL NOT NULL,
	  AEmail CHARACTER VARYING(255) NOT NULL,
	  AFeePaid smallint NOT NULL,
	  HName CHARACTER VARYING(255) NOT NULL,
	  PRIMARY KEY (AID),
	  CID SERIAL,
	  --HName BIGINT UNSIGNED NOT NULL,
	  FOREIGN KEY (CID) REFERENCES CONFERENCE(CID),
	  FOREIGN KEY (HName) REFERENCES HOTEL(HName)
	);
