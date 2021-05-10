cmake_minimum_required(VERSION 2.8)
project(MathLib)
# generate the share library from LINK
add_library(Link SHARED src/Link.c)
target_include_directories(Link PUBLIC ${PROJECT_SOURCE_DIR}/include)

# generate the share library from LIST
add_library(List SHARED src/List.c)
target_include_directories(List PUBLIC ${PROJECT_SOURCE_DIR}/include)
# generate the share library from LLINK
add_library(LLink SHARED src/LLink.c)
target_include_directories(LLink PUBLIC ${PROJECT_SOURCE_DIR}/include)

# set install direactories
if(NOT DEFINED INSTALL_LIB_DIR)
    set(INSTALL_LIB_DIR lib)
endif()
if(NOT DEFINED INSTALL_BIN_DIR)
    set(INSTALL_BIN_DIR bin)
endif()
if(NOT DEFINED INSTALL_INCLUDE_DIR)
    set(INSTALL_INCLUDE_DIR include)
endif()
set(LIBRARY_OUTPUT_PATH ${INSTALL_LIB_DIR})
set(EXECUTABLE_OUTPUT_PATH ${INSTALL_BIN_DIR})
