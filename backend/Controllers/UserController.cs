using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using System;
using System.Data;
using Microsoft.AspNetCore.Mvc;

[Route("api/users")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly IConfiguration _configuration;

    public UserController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    [HttpPost]
    public IActionResult AddUser(User user)
    {
        try
        {
            using MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            connection.Open();

            using MySqlCommand cmd = new MySqlCommand(
                "INSERT INTO users (Name, Email, PhoneNumber, Skillsets, Hobbies) VALUES (@Name, @Email, @PhoneNumber, @Skillsets, @Hobbies)",
                connection);

            cmd.Parameters.AddWithValue("@Name", user.Name);
            cmd.Parameters.AddWithValue("@Email", user.Email);
            cmd.Parameters.AddWithValue("@PhoneNumber", user.PhoneNumber);

            cmd.Parameters.AddWithValue("@Skillsets", JsonConvert.SerializeObject(user.Skillsets));
            cmd.Parameters.AddWithValue("@Hobbies", JsonConvert.SerializeObject(user.Hobbies));

            cmd.ExecuteNonQuery();
            connection.Close();

            return Ok("User added successfully");
        }
        catch (Exception ex)
        {
            return BadRequest($"Error: {ex.Message}");
        }
    }
}