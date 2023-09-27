public class User
{
    public int ID { get; set; }
    public string? Name { get; set; }
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
    public List<string>? Skillsets { get; set; }
    public List<string>? Hobbies { get; set; }
}