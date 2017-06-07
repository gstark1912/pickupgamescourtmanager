USE [canchas]
GO
/****** Object:  Table [dbo].[Client]    Script Date: 7/6/2017 4:11:52 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Client](
	[IDClient] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](500) NOT NULL,
	[Address] [varchar](500) NOT NULL,
	[Email] [varchar](100) NOT NULL,
	[Password] [varchar](16) NOT NULL,
	[Coordenates] [varchar](100) NULL,
 CONSTRAINT [PK_Cliente] PRIMARY KEY CLUSTERED 
(
	[IDClient] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[ClientSchedule]    Script Date: 7/6/2017 4:11:52 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ClientSchedule](
	[IDClientSchedule] [int] NOT NULL,
	[IDClient] [int] NOT NULL,
	[Day] [int] NOT NULL,
	[From] [datetime] NOT NULL,
	[To] [datetime] NOT NULL,
 CONSTRAINT [PK_HorarioCancha] PRIMARY KEY CLUSTERED 
(
	[IDClientSchedule] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Court]    Script Date: 7/6/2017 4:11:52 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Court](
	[IDCourt] [int] IDENTITY(1,1) NOT NULL,
	[Description] [varchar](100) NOT NULL,
	[IDCourtType] [int] NOT NULL,
	[IDFloorType] [int] NOT NULL,
	[IDClient] [int] NOT NULL,
	[Value1] [decimal](16, 2) NULL,
	[Value2] [decimal](16, 2) NULL,
	[Value3] [decimal](16, 2) NULL,
	[Value4] [decimal](16, 2) NULL,
	[IsSoccer] [bit] NOT NULL,
 CONSTRAINT [PK_Cancha] PRIMARY KEY CLUSTERED 
(
	[IDCourt] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[CourtType]    Script Date: 7/6/2017 4:11:52 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[CourtType](
	[IDCourtType] [int] NOT NULL,
	[Description] [varchar](50) NOT NULL,
	[NumberOfPlayers] [int] NOT NULL,
 CONSTRAINT [PK_TipoCancha] PRIMARY KEY CLUSTERED 
(
	[IDCourtType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[FloorType]    Script Date: 7/6/2017 4:11:52 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[FloorType](
	[IDFloorType] [int] NOT NULL,
	[Description] [varchar](100) NOT NULL,
 CONSTRAINT [PK_TipoPiso] PRIMARY KEY CLUSTERED 
(
	[IDFloorType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Reservation]    Script Date: 7/6/2017 4:11:52 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Reservation](
	[IDReservation] [int] NOT NULL,
	[IDCourt] [int] NOT NULL,
	[IDClient] [int] NOT NULL,
	[Price] [decimal](16, 2) NOT NULL,
	[Reservation] [decimal](16, 2) NOT NULL,
	[IDReservationStatus] [int] NOT NULL,
	[Name] [varchar](200) NOT NULL,
	[Datetime] [datetime] NOT NULL,
 CONSTRAINT [PK_Reserva] PRIMARY KEY CLUSTERED 
(
	[IDReservation] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[ReservationStatus]    Script Date: 7/6/2017 4:11:52 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[ReservationStatus](
	[IDReservationStatus] [int] NOT NULL,
	[Description] [varchar](50) NOT NULL,
 CONSTRAINT [PK_EstadoReserva] PRIMARY KEY CLUSTERED 
(
	[IDReservationStatus] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Token]    Script Date: 7/6/2017 4:11:52 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Token](
	[IDToken] [int] IDENTITY(1,1) NOT NULL,
	[IDClient] [int] NOT NULL,
	[AuthToken] [nvarchar](250) NOT NULL,
	[IssuedOn] [datetime] NOT NULL,
	[ExpiresOn] [datetime] NOT NULL,
 CONSTRAINT [PK_Token] PRIMARY KEY CLUSTERED 
(
	[IDToken] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Client] ON 

INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (2, N'Fútbol Madero ', N'Elvira Rawson de Dellepiane 340 ', N'', N'', N'-34.6221504,-58.3603439')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (3, N'Mario Bravo', N'Mario Bravo 1232', N'', N'', N'-34.5952823,-58.4149187')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (4, N'Vilas Club', N'Valentín Alsina 1450', N'', N'', N'-34.5561447,-58.4376984')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (5, N'Urquiza', N'Gral. Urquiza 1371', N'', N'', N'-34.6270665,-58.4086365')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (6, N'Solanas Fútbol 5', N'Av. Francisco Beiró 2835', N'', N'', N'-34.5945678,-58.4935475')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (7, N'Serrano Corner', N'Serrano 250', N'', N'', N'-34.5984550,-58.4452135')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (8, N'San Carlos Club', N'Av. José María Moreno 953', N'', N'', N'-34.6299122,-58.4334240')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (9, N'Quintino fútbol 5', N'Quintino Bocayuva 1241', N'', N'', N'-34.6280241,-58.4211173')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (10, N'Penalty Fútbol Center', N'Matheu 1350 (1249)  y Au. 25 de mayo', N'', N'', N'-34.6251522,-58.3995698')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (11, N'Parthenon', N'Tupac Amarú 1030', N'', N'', N'-34.6273414,-58.4935137')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (12, N'Parque Roca', N'Av. Roca 3490', N'', N'', N'-34.6667299,-58.4404907')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (13, N'Club del Pasaje', N'Del Barco Centenera 950', N'', N'', N'-34.6305486,-58.4383919')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (14, N'La Plaza Fútbol', N'Cochabamba 2335', N'', N'', N'-34.6245155,-58.3980658')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (15, N'Club Ciudad Futbol (Ex Muni Futbol)', N'Miguel Sanchez 1045', N'', N'', N'-34.5426113,-58.4556553')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (16, N'Nikkei Fútbol 5', N'Chacabuco 1260', N'', N'', N'-34.6228353,-58.3755633')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (17, N'Garden Club', N'P. Morán 2379', N'', N'', N'-34.5891498,-58.4904290')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (18, N'Dorrego Open', N'Av. Dorrego 457', N'', N'', N'-34.5947335,-58.4510536')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (19, N'Club Monroe', N'Monroe 3960', N'', N'', N'-34.5675497,-58.4747825')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (20, N'Boedo Cinco', N'Av. Boedo 49', N'', N'', N'-34.6117499,-58.4181875')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (21, N'Barrio Parque Fútbol Club', N'Ortiz de Ocampo 3219', N'', N'', N'-34.5758153,-58.4013042')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (22, N'Barrancas Papi Fútbol', N'Olazábal 1784', N'', N'', N'-34.5567782,-58.4526246')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (23, N'Caballito Fútbol 5', N'Senillosa 824', N'', N'', N'-34.6262147,-58.4283528')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (24, N'Cabrera Fútbol 5', N'J. A. Cabrera 3550', N'', N'', N'-34.5967193,-58.4162405')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (25, N'City Stadium', N'Av. Corrientes 1930/48', N'', N'', N'-34.6045094,-58.3942735')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (26, N'Club San Jose', N'Av. Carabobo 899 (Abajo de la AU1 - Flores)', N'', N'', N'-34.6366541,-58.4523791')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (27, N'Fútbol Vieytes', N'Vieytes 1134 (1275)', N'', N'', N'-34.6453971,-58.3786294')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (28, N'Complejo Deportivo La Esquina', N'Araujo 1450', N'', N'', N'-34.6511021,-58.4922544')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (29, N'Complejo Guemes', N'Güemes 4270', N'', N'', N'-34.5836436,-58.4208264')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (30, N'Complejo Tiempo Libre', N'Nuñez 3927', N'', N'', N'-34.5575896,-58.4809129')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (31, N'Cover Fútbol 5', N'Yatay 556', N'', N'', N'-34.6054335,-58.4290312')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (32, N'Doblas Fútbol', N'Doblas 1043 ', N'', N'', N'-34.6297539,-58.4289317')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (33, N'Don Napoleón', N'Terrada 40 / 50', N'', N'', N'-34.6298674,-58.4685445')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (34, N'Dori Fútbol 5', N'Caracas 4970', N'', N'', N'-34.5799273,-58.4973524')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (35, N'El Anden', N'Yerbal 1255', N'', N'', N'-34.6222098,-58.4480043')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (36, N'El Poli (Federación Flores)', N'Cnel. E. Bonorino 897', N'', N'', N'-34.6376279,-58.4546342')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (37, N'El Poli-deportivo', N'Cramer 3249', N'', N'', N'-34.5546429,-58.4701485')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (38, N'Federación Caballito', N'Av. La Plata 1151', N'', N'', N'-34.6288712,-58.4263608')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (39, N'Freire Sports 761', N'Freire 761', N'', N'', N'-34.5766686,-58.4496114')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (40, N'Club Sportivo Devoto', N'Gabriela Mistral 3151', N'', N'', N'-34.5891384,-58.5047562')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (41, N'La Capillita Fútbol 5', N'Dorrego 2898', N'', N'', N'-34.5739882,-58.4299851')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (42, N'La Fabrica', N'Ladines 3720', N'', N'', N'-34.5905253,-58.5155346')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (43, N'Lacroze & Thomas', N'Av. Federico Lacroze 3547', N'', N'', N'-34.5810674,-58.4513098')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (44, N'Medio Campo', N'Corrientes 3845', N'', N'', N'-34.6033780,-58.4186828')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (45, N'Ocampo Fútbol', N'Ortiz de Ocampo 3250', N'', N'', N'-34.5749949,-58.4010780')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (46, N'Palermo Viejo Fútbol', N'Godoy Cruz 1724', N'', N'', N'-34.5873510,-58.4337125')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (47, N'Pressing', N'Urquiza 301', N'', N'', N'-34.6140090,-58.4098870')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (48, N'Solís Cano Tenis Fútbol', N'Virrey Cevallos 1248', N'', N'', N'-34.6231753,-58.3885457')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (49, N'Campus Sport Arena', N'Maza 754', N'', N'', N'-34.6203379,-58.4151287')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (50, N'San Jorge - Fútbol 5', N'Drumond 2262', N'', N'', N'-34.6414454,-58.4242005')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (51, N'Complejo Parque Barracas', N'California 1855 y Aut. Sur Barracas', N'', N'', N'-34.6471164,-58.3748651')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (52, N'Centenario de San Telmo', N'Bolivar 1257 ', N'', N'', N'-34.6225927,-58.3727777')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (53, N'Il Capo Fútbol', N'Combate de los Pozos 1868', N'', N'', N'-34.6302796,-58.3915543')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (54, N'El Parque Fútbol', N'Brig. Gral. Facundo Quiroga s/n', N'', N'', N'-34.5821190,-58.3890610')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (55, N'Fútbol Urbano', N'Campos Salles 1565', N'', N'', N'-34.5476141,-58.4570253')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (56, N'Open Gallo', N'Gallo 241', N'', N'', N'-34.6057128,-58.4135380')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (57, N'Estrella de Boedo', N'Constitución 4151', N'', N'', N'-34.6289194,-58.4229517')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (58, N'La Terraza', N'Av. Cabildo 3432', N'', N'', N'-34.5513150,-58.4663458')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (59, N'El Galpón Fútbol 5', N'Costa Rica 6043', N'', N'', N'-34.5790662,-58.4392468')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (60, N'Pareja Fútbol', N'Jose Pedro Varela 4650', N'', N'', N'-34.6095403,-58.5153114')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (61, N'Martin Fierro', N'Cochabamba 3534', N'', N'', N'-34.6268823,-58.4150510')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (62, N'Buenos Aires SUR', N'Cochabamba 3650', N'', N'', N'-34.6270561,-58.4166760')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (63, N'Club Social y Cultural Alvear', N'J.E. Rodo 4190', N'', N'', N'-34.6404447,-58.4812173')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (64, N'Circulo Social Valle Miñor', N'Rafaela 4840', N'', N'', N'-34.6394452,-58.4951690')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (65, N'Complejo Gustavo Costas', N'Boedo 49', N'', N'', N'-34.6117499,-58.4181875')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (66, N'Eleven Gol', N'Dean funes 1832', N'', N'', N'-34.6321273,-58.4046971')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (67, N'Parque Ribera Sur', N'Av. roca y av. gral paz', N'', N'', N'-34.7009036,-58.46752')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (68, N'El Tinglado', N'Calcena 541', N'', N'', N'-34.6202042,-58.4587674')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (69, N'Santo Tome Stadium', N'Santo Tomé 3165', N'', N'', N'-34.6064509,-58.4898685')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (70, N'Alumini Futbol 5/6', N'Humboldt 37', N'', N'', N'-34.5981538,-58.4522669')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (71, N'Club San Antonio Fútbol ', N'San Pedrito 1050', N'', N'', N'-34.6424489,-58.4613515')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (72, N'Club Premier', N'Campichuelo 472', N'', N'', N'-34.6118863,-58.4351866')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (73, N'Polideportivo Marie Curie', N'Patricias Argentinas 280', N'', N'', N'-34.6051922,-58.4337081')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (74, N'San José Fútbol', N'San José 1267', N'', N'', N'-34.6233911,-58.3858201')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (75, N'El Portón de Nuñez', N'O´Higgins 3487', N'', N'', N'-34.5479222,-58.46480617')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (76, N'Homero', N'Carrasco 825 ', N'', N'', N'-34.6285199,-58.4961030')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (77, N'Club Atletico General Lamadrid', N'Desaguadero 3180', N'', N'', N'-34.6124284,-58.5151062')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (78, N'Salguero Fútbol', N'Rafael Obligado 1221', N'', N'', N'-34.5710746,-58.3962536')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (79, N'Pedernera Tres', N'Pedernera 950', N'', N'', N'-34.6391808,-58.4573390')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (80, N'Polideportivo Don Pepe', N'Gral. los hornos 1800', N'', N'', N'-34.6469696,-58.3742793')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (81, N'Parque Manuel Belgrano', N'J. Salguero 3450', N'', N'', N'-34.5726602,-58.4013542')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (82, N'Club de deportes Apanovi - 2001', N'Av. Boedo 1174', N'', N'', N'-34.6276309,-58.4159245')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (83, N'Asociación Atlética Primera Junta', N'Zuviría 250', N'', N'', N'-34.6288377,-58.4299707')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (84, N'Club CASA - Tenis y Fútbol', N'Av. Figueroa Alcorta 7101', N'', N'', N'-34.5477316,-58.4422084')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (85, N'Club Social Cultural y Deportivo Homero Manzi', N'Beauchef 1050', N'', N'', N'-34.6296332,-58.4319010')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (86, N'Club Atlético Barracas Juniors', N'General Hornos 1850', N'', N'', N'-34.6476526,-58.3740499')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (87, N'Club Social y Deportivo Villa Malcolm', N'Av. Córdoba 5064', N'', N'', N'-34.5910678,-58.4349732')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (88, N'Malvinas Argentinas', N'Pedernera 939', N'', N'', N'-34.6392157,-58.4573494')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (89, N'Club El Barrio', N'Constitución 4253', N'', N'', N'-34.6291367,-58.4243605')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (90, N'Club San Andres', N'Av. La Plata 2925', N'', N'', N'-34.6479369,-58.4174210')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (91, N'Goles y Gambetas', N'Soler 3231', N'', N'', N'-34.5967233,-58.4106484')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (92, N'Bethania', N'Humahuaca 4556', N'', N'', N'-34.6010884,-58.4292437')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (93, N'Club San Gabriel', N'Av. Directorio 4375', N'', N'', N'-34.6456357,-58.4849869')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (94, N'Futbol 5 Don Balon', N'Bermudez 1066', N'', N'', N'-34.6275856,-58.4989319')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (95, N'Centro Artiguense', N'Av. Brasil 2548', N'', N'', N'-34.6313524,-58.3997904')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (96, N'Nueva Generación - Alberdi', N'J. B. Alberdi 4565 - Bajo la Autopista', N'', N'', N'-34.5208303,-58.5122396')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (97, N'Complejo Deportivo El Círculo', N'Av. Sarmiento 4040', N'', N'', N'-34.5717466,-58.4121865')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (98, N'Club Don Benito', N'Benito Juarez 2658', N'', N'', N'-34.6150841,-58.5091803')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (99, N'Velez Norte', N'Carrasco 121', N'', N'', N'-34.634126,-58.488724')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (100, N'Ateneo Popular Versalles (APV)', N'Roma 950', N'', N'', N'-34.6259561,-58.5223762')
GO
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (101, N'Futbol 5 Alumni', N'Humboldt 37', N'', N'', N'-34.5981538,-58.4522669')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (102, N'Parque Norte', N'Av. Cantilo y Guiraldes (frente a Ciudad Universitaria).', N'', N'', N'-34.5484812,-58.4389035')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (103, N'Nueva Generación ', N'Rincon 1326', N'', N'', N'-34.6244179,-58.3947313')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (104, N'Marangoni Futbol y Deporte - Sede Central (Palermo)', N'Juncal 3131', N'', N'', N'-34.5859563,-58.4086043')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (105, N'Club Remedios', N'Zelada 4642', N'', N'', N'-34.6414581,-58.4918307')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (106, N'El Puente', N'Niceto Vega 5432', N'', N'', N'-34.5876750,-58.4379880')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (107, N'Toabas club', N'Cconstitucion 2827', N'', N'', N'-34.6268427,-58.4043541')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (108, N'El Campito Villa Urquiza', N'Olazabal 5247 ', N'', N'', N'-34.5762084,-58.4979442')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (109, N'Argentina 2000', N'NAHUEL HUAPI 5891', N'', N'', N'-34.6084175,-58.3731613')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (110, N'Centro Versalles / La Fabrica', N'Roma 560', N'', N'', N'-34.632360,-58.520289')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (111, N'Club Daom ', N'Janner', N'', N'', N'-34.6509472,-58.4446201')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (112, N'Obras Sanitarias', N'Av Libertador 7395 ', N'', N'', N'-34.5454361,-58.4588864')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (113, N'UTN Campus', N'Mozart 2300', N'', N'', N'-34.6590978,-58.4695668')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (114, N'Campo Cultural y Deportivo Del Sindicato De Luz y Fuerza', N'Remedios de Escalada de San Martín 4250', N'', N'', N'-34.6252441,-58.4923220')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (115, N'Club Platense', N'Crisologo Larralde 5195', N'', N'', N'-34.5623894,-58.4941981')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (116, N'Asociación Argentina de Árbitros ', N'Av Riestra 2860', N'', N'', N'-34.6037232,-58.3815931')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (117, N'Club Social y Deportivo Círculo Penacho Azul', N'Tamborini 5676', N'', N'', N'-34.5695350,-58.4980597')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (118, N'Club San Jorge', N'Pedernera 950 ', N'', N'', N'-34.6391913,-58.4573514')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (119, N'Complejo OAK', N'Ayacucho 2391', N'', N'', N'-34.5196313,-58.5001558')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (120, N'Justo Futbol 5', N'Juan b. Justo 2002', N'', N'', N'-34.5910925,-58.4391450')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (121, N'Fútbol GEBA', N'Av. Figueroa Alcorta 5500', N'', N'', N'-34.5605920,-58.4256941')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (122, N'Sporting Club Fútbol 5', N'350 ESTE PULPERIA', N'', N'', N'-34.6037232,-58.3815931')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (123, N'Nueva Generación', N'Quintino Bocayuva 1241', N'', N'', N'-34.6280206,-58.4211001')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (124, N'Futbol 5 Camping Club', N'Calle 122', N'', N'', N'-27.399061,-55.926677')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (125, N'Palermo Futbol', N'El Salvador 5301', N'', N'', N'-34.5856976,-58.4324272')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (126, N'Complejo Pipa Gancedo', N'Nogoya 5014', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (127, N'Las Cañas ', N'SANTIAGO DEL ESTERO 1253', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (128, N'Argentina 2000', N'Olazabal 5247', N'', N'', N'-34.576267,-58.487705')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (129, N'El gigante cultural y deportivo', N'Dr.luis belaustegui', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (130, N' Estación FITZ ROY', N'Fitz Roy 851', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (131, N'Parque Sarmiento Canchas', N'Av. Ricardo Balbín 4750', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (132, N'Urquiza Futbol', N'Franklin D. Roosvelt 5170', N'', N'', N'-34.57407091094448,-58.4879603')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (133, N' AF Parque Chas', N'Bauness 1486', N'', N'', N'-34.583899,-58.480274')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (134, N'Grün FC', N'Av Crisólogo Larralde 999', N'', N'', N'-34.542055,-58.455464')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (135, N'CLUB 3 PUNTOS', N'JUAN AGUSTIN GARCIA 4774', N'', N'', N'-34.622941,-58.501152')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (136, N'La Canchita (Chacarita)', N'Jorge Newbery 4880 ', N'', N'', N'-34.596035,-58.458086')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (137, N'Lugano Tennis Club', N'Murguiondo 3915 ', N'', N'', N'-34.673519,-58.480445')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (138, N'Fenix Fútbol', N'Manuel Ricardo Trelles 2735', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (139, N'Estadio Modelo', N'Miñones 1780', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (140, N'Tiro Federal Argentino', N'Av. Del Libertador 6935', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (141, N'Al Toque La Quemita', N'Mariano Acosta 1981', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (142, N'El Estadio Futbol', N'Av. Belgrano 2823', N'', N'', N'-34.6146995,-58.4063453')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (143, N'El Predio', N'Juan Ramirez de Velasco 1040', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (144, N'Caballito Norte', N'Avellaneda 1423', N'', N'', N'-34.619634,-58.4519488')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (145, N'Devoto Futbol', N'Melincue 4742', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (146, N'Saavedra Parque Fútbol', N'Av Ruiz Huidobro 3715', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (147, N'Seven Court', N'Av. Reservistas Argentinos 219', N'', N'', N'-34.636959,-58.5219788')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (148, N'Fútbol Noble', N'Julio Argentino Noble 4500', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (149, N'Futbol Retiro', N'Padre Carlos Mugica 325', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (150, N'Fútbol Federal', N'Av. Del Libertador 6905', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (151, N'Distrito Fútbol', N'José Hernández 1310 ', N'', N'', N'-34.5591166,-58.4434367')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (152, N'OBSBA', N'Avenida Comodoro Martín Rivadavia 1350', N'', N'', N'-34.5389984,-58.4645566')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (153, N'Obras Fútbol', N'Machain 3480', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (154, N'El Templo Devoto', N'Desaguadero 3120', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (155, N'La Esquina Futbol', N'Miñones 1720', N'', N'', N'-34.5588744,-58.4438687')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (156, N'Club Deportivo Español', N'Santiago de Compostela 3801', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (157, N'CASA', N'Av. Figueroa Alcorta 7101', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (158, N'Círculo Policía Federal Schuller', N'Santiago de Calzadilla 1350', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (159, N'Club Atlético California', N'Andonaegui 3347', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (160, N'Club Pinocho', N'Manuela Pedraza 5139', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (161, N'Club Sunderland', N'Lugones 3161', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (162, N'Club Estudiantes del Norte', N'Roberto Goyeneche 4051', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (163, N'All Boys de Saavedra', N'BEsares 315', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (164, N'All Boys de Saavedra', N'Besares 3142 ', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (165, N'Defensores de Chacarita', N'Elcano 3831', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (166, N'Estrella de Maldonado', N'Juan B Justo 1439', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (167, N'Club Eros', N'Uriarte 1609', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (168, N'Fulgor de Villa Crespo', N'Loyola 828', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (169, N'Parque Telmo Futsal', N'Cochabamba 311', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (170, N'Jovenes Deportistas', N'Soldado de la Frontera 5236', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (171, N'El Ideal ', N'Montiel 5142', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (172, N'Atlético Lugano', N'Cafayate 4155', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (173, N'Amigos de Villa Luro', N'Ramón Falcón 5176 ', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (174, N'Pedro Echagüe', N'Portela 836', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (175, N'América Del Sud', N'Francisco Bilbao 3760', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (176, N'Club Stentor', N'Sarachaga 5634', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (177, N'Club Nueva Estrella', N'Santander 4602', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (178, N'Jorge Newbery', N'Irigoyen 2080', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (179, N'El Buen Pastor', N'Jose Leon Cabezón 2557', N'', N'', N',')
INSERT [dbo].[Client] ([IDClient], [Name], [Address], [Email], [Password], [Coordenates]) VALUES (180, N'Espíritu potrero FC', N'Gualeguaychú 2059', N'', N'', N'-34.6162739,-58.5006499')
SET IDENTITY_INSERT [dbo].[Client] OFF
ALTER TABLE [dbo].[ClientSchedule]  WITH CHECK ADD  CONSTRAINT [FK_HorarioCliente_Cliente] FOREIGN KEY([IDClient])
REFERENCES [dbo].[Client] ([IDClient])
GO
ALTER TABLE [dbo].[ClientSchedule] CHECK CONSTRAINT [FK_HorarioCliente_Cliente]
GO
ALTER TABLE [dbo].[Court]  WITH CHECK ADD  CONSTRAINT [FK_Cancha_Cliente] FOREIGN KEY([IDClient])
REFERENCES [dbo].[Client] ([IDClient])
GO
ALTER TABLE [dbo].[Court] CHECK CONSTRAINT [FK_Cancha_Cliente]
GO
ALTER TABLE [dbo].[Court]  WITH CHECK ADD  CONSTRAINT [FK_Cancha_TipoCancha] FOREIGN KEY([IDCourtType])
REFERENCES [dbo].[CourtType] ([IDCourtType])
GO
ALTER TABLE [dbo].[Court] CHECK CONSTRAINT [FK_Cancha_TipoCancha]
GO
ALTER TABLE [dbo].[Court]  WITH CHECK ADD  CONSTRAINT [FK_Cancha_TipoPiso] FOREIGN KEY([IDFloorType])
REFERENCES [dbo].[FloorType] ([IDFloorType])
GO
ALTER TABLE [dbo].[Court] CHECK CONSTRAINT [FK_Cancha_TipoPiso]
GO
ALTER TABLE [dbo].[Reservation]  WITH CHECK ADD  CONSTRAINT [FK_Reserva_Cancha] FOREIGN KEY([IDCourt])
REFERENCES [dbo].[Court] ([IDCourt])
GO
ALTER TABLE [dbo].[Reservation] CHECK CONSTRAINT [FK_Reserva_Cancha]
GO
ALTER TABLE [dbo].[Reservation]  WITH CHECK ADD  CONSTRAINT [FK_Reserva_Cliente] FOREIGN KEY([IDClient])
REFERENCES [dbo].[Client] ([IDClient])
GO
ALTER TABLE [dbo].[Reservation] CHECK CONSTRAINT [FK_Reserva_Cliente]
GO
ALTER TABLE [dbo].[Reservation]  WITH CHECK ADD  CONSTRAINT [FK_Reserva_EstadoReserva] FOREIGN KEY([IDReservationStatus])
REFERENCES [dbo].[ReservationStatus] ([IDReservationStatus])
GO
ALTER TABLE [dbo].[Reservation] CHECK CONSTRAINT [FK_Reserva_EstadoReserva]
GO
ALTER TABLE [dbo].[Token]  WITH CHECK ADD  CONSTRAINT [FK_Token_Cliente] FOREIGN KEY([IDClient])
REFERENCES [dbo].[Client] ([IDClient])
GO
ALTER TABLE [dbo].[Token] CHECK CONSTRAINT [FK_Token_Cliente]
GO
