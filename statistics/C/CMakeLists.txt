cmake_minimum_required(VERSION 2.8)
project(libmathlib)

set(MATHLIB_MAJOR_VERSION 0)
set(MATHLIB_MINOR_VERSION 0)
set(MATHLIB_BUILD_VERSION 1)
set(libmathlib "${MATHLIB_MAJOR_VERSION}.${MATHLIB_MINOR_VERSION}.${MATHLIB_BUILD_VERSION}")
add_library(libmathlib SHARED ${CMAKE_SOURCE_DIR}/src)
target_include_directories(libmathlib PUBLIC ${CMAKE_SOURCE_DIR}/include)
