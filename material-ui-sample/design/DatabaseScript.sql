USE DigitalAssets

GO

CREATE TYPE NameType FROM VARCHAR(100)

GO

CREATE TYPE UsernameType FROM VARCHAR(100)

GO

CREATE TYPE IsoType FROM CHAR(2)

GO

CREATE TYPE DescriptionType FROM VARCHAR(500)

GO

CREATE TYPE VersionType FROM CHAR(10)

GO

CREATE TABLE Country
(
	Iso			IsoType NOT NULL PRIMARY KEY,
	Name		NameType NOT NULL,
)

GO

CREATE TABLE Language
(
	Iso			IsoType NOT NULL PRIMARY KEY,
	Name		NameType NOT NULL,
)

GO



CREATE TABLE AssetType 
(
    Id				INT IDENTITY PRIMARY KEY,
    Code			NameType NOT NULL,
    Name			NameType NOT NULL,
    Description		DescriptionType
)

GO

CREATE TABLE Folder
(
	Id					INT IDENTITY PRIMARY KEY,
	Code				NameType NOT NULL,
	Name				NameType NOT NULL,
	ParentId			INT,
	AssetType			INT NOT NULL,
	UpdatedOn			DATETIME,
	UpdatedBy			UsernameType NOT NULL,
	FOREIGN KEY (ParentId) REFERENCES Folder(Id),
	FOREIGN KEY (AssetType) REFERENCES AssetType(Id)
)

GO

CREATE TABLE AssetProductImage
(
	Id					UNIQUEIDENTIFIER PRIMARY KEY,
	Name				NameType NOT NULL,
	SKU					CHAR(10) NOT NULL,
	Product				NameType NOT NULL,
	CountryCode			IsoType NOT NULL,
	LanguageCode		IsoType NOT NULL,
	UpdatedOn			DATETIME NOT NULL,
	UpdatedBy			UsernameType NOT NULL,
	FOREIGN KEY(CountryCode) REFERENCES Country(Iso),
	FOREIGN KEY(LanguageCode) REFERENCES Language(Iso),
)

GO

CREATE TABLE AssetProductImageFile
(
	Id				UNIQUEIDENTIFIER PRIMARY KEY,
	Name			NameType NOT NULL,
	Size			INT,
	Version			VersionType,
	Height			INT,
	Width			INT,
	IsDefault		BIT,
	UpdatedOn		DATETIME NOT NULL,
	UpdatedBy		UsernameType NOT NULL,
	AssetId			UNIQUEIDENTIFIER NOT NULL,
	FOREIGN KEY (AssetId) REFERENCES AssetProductImage(Id)
)

GO

CREATE TABLE AssetImage
(
	Id				UNIQUEIDENTIFIER NOT NULL PRIMARY KEY,
	Name			NameType NOT NULL,
	Abstract		NVARCHAR(MAX) NULL,
	CountryCode		IsoType NOT NULL,
	LanguageCode	IsoType NOT NULL,
	UpdatedOn		DATETIME NOT NULL,
	UpdatedBy		UsernameType NOT NULL,
	FOREIGN KEY(CountryCode) REFERENCES Country(Iso),
	FOREIGN KEY(LanguageCode) REFERENCES Language(Iso),
)

GO

CREATE TABLE AssetImageFile
(
	Id				UNIQUEIDENTIFIER NOT NULL PRIMARY KEY,
	Name			NameType NOT NULL,
	BlobId			UNIQUEIDENTIFIER NOT NULL,
	Width			INT NOT NULL,
	Height			INT NOT NULL,
	Size			INT NOT NULL,
	Version			VersionType,
	IsDefault		BIT,
	UpdatedOn		DATETIME NOT NULL,
	UpdatedBy		UsernameType NOT NULL,
	AssetId			UNIQUEIDENTIFIER NOT NULL,
	FOREIGN KEY (AssetId) REFERENCES AssetImage(Id)
)

GO

CREATE TABLE AssetMaster
(
	Id					BIGINT IDENTITY PRIMARY KEY,
	AssetId				UNIQUEIDENTIFIER NOT NULL,
	AssetTypeId			INT NOT NULL,
	Name				NameType NOT NULL,
	Metadata			NVARCHAR(MAX) NOT NULL,
	PropertyMetadata	NVARCHAR(MAX) NOT NULL,
	CountryCode			IsoType NOT NULL,
	LanguageCode		IsoType NOT NULL,
	UpdatedOn			DATETIME NOT NULL,
	UpdatedBy			UsernameType NOT NULL,
	FOREIGN KEY (AssetTypeId) REFERENCES AssetType(Id),
	FOREIGN KEY(CountryCode) REFERENCES Country(Iso),
	FOREIGN KEY(LanguageCode) REFERENCES Language(Iso),
)


