require 'csv'
require 'pry'

class User
  HEADERS = ["location", "hired_before_july", "tech_position", "leadership_position", "successful_environment", "professional_progression", "education", "age", "male", "female", "non_binary", "trans", "cis", "other", "no_response_gender", "other_gender_text", "north_american_native", "american_indian", "alaskan_native", "canadian_indigenous", "indigenous_south_american", "hispanic_or_latino", "mexican", "hispanic_central_american", "hispanic_south_american", "other_hispanic", "african_or_african_american", "african_american", "african", "caribbean", "other_black", "pacific_islander", "native_hawaiian", "samoan", "other_pacific_islander", "asian", "chinese", "vietnamese", "korean", "laotian", "filipino", "japanese", "south_asian", "asian_indian", "white", "slavic", "middle_eastern", "north_african", "no_response_ethnicity", "lgbtq", "veteran", "disabled", "disabled_other", "other_underrepresented", "do_not_identify", "no_response_other", "other_underrepresented_text"]

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

@users = Array.new

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

def find_user(key, value)
  @users.select {|user| user.send(key) == value}
end

binding.pry
