namespace dotnet6_vite.Helpers;

using AutoMapper;
using dotnet6_vite.Entities;
using dotnet6_vite.Dto;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<NewExample, Example>();
    }
}