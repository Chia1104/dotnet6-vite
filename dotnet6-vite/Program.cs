using dotnet6_vite.Helpers;
using dotnet6_vite.Services;
using dotnet6_vite.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<DataContext>();
builder.Services.AddCors();

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddScoped<IRepository, Repository>();
builder.Services.AddScoped<IExampleService, ExampleService>();
builder.Services.AddScoped<IExampleRepository, ExampleRepository>();
builder.Services.AddScoped<IArmorService, ArmorService>();
builder.Services.AddScoped<IArmorRepository, ArmorRepository>();
builder.Services.AddScoped<IHeadgearService, HeadgearService>();
builder.Services.AddScoped<IHeadgearRepository, HeadgearRepository>();
builder.Services.AddScoped<IShieldService, ShieldService>();
builder.Services.AddScoped<IShieldRepository, ShieldRepository>();
builder.Services.AddScoped<IWeaponService, WeaponService>();
builder.Services.AddScoped<IWeaponRepository, WeaponRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.UseMiddleware<ErrorHandlerMiddleware>();
app.UseMiddleware<JwtMiddleware>();

app.Run();