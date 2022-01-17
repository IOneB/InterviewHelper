using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace InterviewHelper.Web.Migrations
{
    public partial class denormalization : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AnswerParts");

            migrationBuilder.AddColumn<string>(
                name: "Answer",
                table: "HumanResources",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Answer",
                table: "HumanResources");

            migrationBuilder.CreateTable(
                name: "AnswerParts",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    AnswerPartJSON = table.Column<string>(type: "text", nullable: true),
                    HumanResourceId = table.Column<long>(type: "bigint", nullable: false),
                    PartNumber = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnswerParts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AnswerParts_HumanResources_HumanResourceId",
                        column: x => x.HumanResourceId,
                        principalTable: "HumanResources",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AnswerParts_HumanResourceId",
                table: "AnswerParts",
                column: "HumanResourceId");
        }
    }
}
