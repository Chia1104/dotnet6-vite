namespace dotnet6_vite.Dto.User;

public class TokenDetailsDto
{
    public string UserId { get; set; }
    
    public string Name { get; set; }
    
    public string Email { get; set; }
    
    public TokenDetailsDto(string userId, string name, string email)
    {
        UserId = userId.ToString();
        Name = name;
        Email = email;
    }
}