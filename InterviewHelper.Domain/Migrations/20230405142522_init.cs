using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using System;

#nullable disable

namespace InterviewHelper.Domain.Migrations
{
	/// <inheritdoc />
	public partial class init : Migration
	{
		/// <inheritdoc />
		protected override void Up(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.CreateTable(
				name: "HumanResources",
				columns: table => new
				{
					Id = table.Column<long>(type: "bigint", nullable: false)
						.Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
					Name = table.Column<string>(type: "text", nullable: true),
					DateInput = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
					Answer = table.Column<string>(type: "text", nullable: true)
				},
				constraints: table =>
				{
					table.PrimaryKey("PK_HumanResources", x => x.Id);
				});
		}

		/// <inheritdoc />
		protected override void Down(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.DropTable(
				name: "HumanResources");
		}
	}
}
