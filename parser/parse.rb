require 'csv'
require 'pry'

# Purpose of this file is to parse the csv data and make comparisons between the selected users.
# We used this file by running the parse.rb program in our ruby console.

# The create_attr and create_method methods in the User class are used to create attributes/methods for each of the HEADER values
# http://stackoverflow.com/a/4082937/3294591

class User
  HEADERS = [
    "location",
    "hired_before_july",
    "tech_position",
    "leadership_position",
    "successful_environment",
    "professional_progression",
    "education",
    "age",
    "male",
    "female",
    "non_binary",
    "trans",
    "cis",
    "other",
    "no_response_gender",
    "other_gender_text",
    "north_american_native",
    "american_indian",
    "alaskan_native",
    "canadian_indigenous",
    "indigenous_south_american",
    "hispanic_or_latino",
    "mexican",
    "hispanic_central_american",
    "hispanic_south_american",
    "other_hispanic",
    "african_or_african_american",
    "african_american",
    "african",
    "caribbean",
    "other_black",
    "pacific_islander",
    "native_hawaiian",
    "guamanian",
    "samoan",
    "other_pacific_islander",
    "asian",
    "chinese",
    "vietnamese",
    "korean",
    "laotian",
    "filipino",
    "japanese",
    "south_asian",
    "asian_indian",
    "white",
    "slavic",
    "middle_eastern",
    "north_african",
    "no_response_ethnicity",
    "lgbtq",
    "veteran",
    "disabled",
    "disabled_other",
    "other_underrepresented",
    "do_not_identify",
    "no_response_other",
    "other_underrepresented_text"
  ]

  def initialize
    # add all headers to class
    HEADERS.each do |header|
      self.create_attr(header)
    end

    self.create_attr("user_id")
  end

  def create_method (name, &block)
    self.class.send(:define_method, name, &block)
  end

  def create_attr(name)
    create_method( "#{name}=".to_sym) { |val| instance_variable_set("@" + name,val) }

    create_method(name.to_sym) { instance_variable_get("@" + name) }
  end

  def headers
    HEADERS
  end
end

class UserGroup < Array
  # creates new UserGroup class and returns filtered users
  def find_user(key, value)
    new_class = UserGroup.new

    if (value.kind_of?(Array) || key.kind_of?(Array))
      user_array = UserGroup.new
      if (value.kind_of?(Array))
        value.each do |val|
          users_match = select {|user| user.send(key) == val}

          collect_users(users_match, user_array)
        end
      end

      if (key.kind_of?(Array))
        key.each do |k|
          users_match = select {|user| user.send(k) == value}

          collect_users(users_match, user_array)
        end
      end
    else
      user_array = matching_users(key, value)
    end

    user_array.each do |user|
      new_class.push(user)
    end

    new_class
  end

  def collect_users(users_matching, array_of_users)
    users_matching.each do |match|
      if array_of_users.matching_users("user_id", match.user_id).length < 1
        array_of_users.push(match)
      end
    end
  end

  def matching_users(attrName, attrValue)
    select { |user| user.send(attrName) == attrValue }
  end

  def count_users(keys, value)
    user_counts = Array.new
    keys.each do |key|
      relevant_users = matching_users(key, value)
      user_counts.push({key => relevant_users.count})
    end
    user_counts
  end

  def management_position
    self.find_user("leadership_position", ["1", "2", "3"])
  end

  def person_of_color
    self.find_user(["north_american_native", "hispanic_or_latino", "african_or_african_american", "pacific_islander", "asian", "middle_eastern", "north_african"], "1")
  end

  def lgbt_id
    self.find_user(['lgbtq', 'trans'], '1')
  end

end

@users = UserGroup.new

def create_user_profile(data, id)
  person = User.new
  data.each do |key, value|
    unless key.nil? || key == 0
      person.send("#{key}=", value)
    end
  end
  person.user_id = id
  @users.push(person)
end

sample_user = User.new

CSV.foreach("techtownnewheaders.csv", headers: true) do |row|
  row.each_with_index do |question, index|
    question[0] = sample_user.headers[index]
  end
  # $. will show the current line number - 1 to account for heading row
  create_user_profile(row.to_hash, $.)
end

binding.pry
