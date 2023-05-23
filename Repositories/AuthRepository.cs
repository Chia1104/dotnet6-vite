using dotnet6_vite.Entities;
using dotnet6_vite.Helpers;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Options;
using dotnet6_vite.Dto.User;
using AutoMapper;

namespace dotnet6_vite.Repositories;

public interface IAuthRepository
{
    string GenerateAccessToken(User user);
    TokenDetailsDto DecodeAccessToken(string token);
}
public class AuthRepository : IAuthRepository
{
    private readonly JwtSetting _jwtSetting;
    private readonly IMapper _mapper;

    public AuthRepository(IOptions<JwtSetting> jwtSetting, IMapper mapper)
    {
        _jwtSetting = jwtSetting.Value;
        _mapper = mapper;
    }

    public string GenerateAccessToken(User user)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(Environment.GetEnvironmentVariable("JWT_SECRET"));
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(
                new Claim[]
                {
                    new Claim("id", user.UserId.ToString()),
                    new Claim("name", user.Name),
                    new Claim("email", user.Email)
                }),
            Expires = DateTime.UtcNow.AddDays(7),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
    
    public TokenDetailsDto DecodeAccessToken(string token)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(Environment.GetEnvironmentVariable("JWT_SECRET"));
        tokenHandler.ValidateToken(token, new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidateIssuer = false,
            ValidateAudience = false,
            ClockSkew = TimeSpan.Zero
        }, out SecurityToken validatedToken);

        var jwtToken = (JwtSecurityToken)validatedToken;

        return new TokenDetailsDto(
            jwtToken.Claims.First(x => x.Type == "id").Value, 
            jwtToken.Claims.First(x => x.Type == "name").Value, 
            jwtToken.Claims.First(x => x.Type == "email").Value
            );
    }
}