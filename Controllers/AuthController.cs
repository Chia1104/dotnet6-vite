using Microsoft.AspNetCore.Mvc;
using dotnet6_vite.Dto.User;
using dotnet6_vite.Services;
using dotnet6_vite.Helpers;
using Microsoft.Net.Http.Headers;

namespace dotnet6_vite.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;
    
    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }
    
    [HttpPost(Name = "Login")]
    public IActionResult Login([FromBody] LoginDto loginDto)
    {
        return Ok(new
        {
            message = "Login success",
            data = _authService.Login(loginDto)
        });
    }
    
    [HttpPost(Name = "Register")]
    public IActionResult Register([FromBody] RegisterDto registerDto)
    {
        return Ok(new
        {
            message = "Register success",
            data = _authService.Register(registerDto)
        });
    }
    
    [HttpGet(Name = "GetUserDetails")]
    [Authorize]
    public IActionResult GetUserDetails()
    {
        var accessToken = Request.Headers[HeaderNames.Authorization].ToString().Replace("Bearer ", "");
        return Ok(new
        {
            message = "Get user details success",
            data = _authService.GetUserDetails(accessToken)
        });
    }
}