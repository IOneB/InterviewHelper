using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace InterviewHelper.Web.Migrations
{
    public partial class addAnswers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AnswerParts",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    PartNumber = table.Column<int>(type: "integer", nullable: false),
                    HumanResourceId = table.Column<long>(type: "bigint", nullable: false),
                    AnswerPartJSON = table.Column<string>(type: "text", nullable: true)
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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AnswerParts");
        }
    }
}
